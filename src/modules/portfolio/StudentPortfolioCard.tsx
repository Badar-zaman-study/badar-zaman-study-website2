"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { createClient } from "@/src/utils/supabase/client";
import { toast } from "react-toastify";
import Pagination3 from '@/src/components/Pagination3'
import Loader from "@/src/components/Loader";
import { FadeIn } from "@/src/components/motion/fade-in";

export default function StudentPortfolioCard() {
   const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [portfolios, setPortfolios] = useState<any[]>([]);
    const [totalCount, setTotalCount] =useState(0);


    const PAGE_SIZE = 20;

     // =========================================
     // FETCH SCHOLARSHIPS
     // =========================================
   
     const fetchPortfolios = async () => {
       try {
         setLoading(true);
   
         const from =
           (currentPage - 1) * PAGE_SIZE;
   
         const to =
           from + PAGE_SIZE - 1;
   
         const today = new Date()
           .toISOString()
           .split("T")[0];
   
         let query = supabase
           .from("portfolio")
           .select("*", {
             count: "exact",
           });
   
   
         // =========================================
         // ORDER + PAGINATION
         // =========================================
   
         query = query
           .order(
             "created_at",
             {
               ascending: false,
             }
           )
           .range(from, to);
   
         const {
           data,
           error,
           count,
         } = await query;
   
         if (error) {
           console.error(
             "Supabase Error:",
             error
           );
   
           toast.error(error.message);
   
           setPortfolios([]);
           setTotalCount(0);
   
           return;
         }
   
         setPortfolios(
           (data || []) as any[]
         );
   
         setTotalCount(count || 0);
   
       } catch (error) {
         console.error(
           "Fetch Scholarships Error:",
           error
         );
   
         toast.error(
           "Failed to fetch scholarships."
         );
   
       } finally {
         setLoading(false);
       }
     };


  useEffect(() => {
    fetchPortfolios();
  }, [
    currentPage,
  ]);

   const totalPages = Math.ceil(
    totalCount / PAGE_SIZE
  );


   // =========================================
  // PAGE CHANGE
  // =========================================

  const handlePageChange = (
    page: number
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    // Scroll back to portfolio section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    // =========================================
  // PAGINATION ARRAY
  // =========================================

  const paginationPages = useMemo(() => {
    const pages: number[] = [];

    for (
      let i = 1;
      i <= totalPages;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  }, [totalPages]);


  


  console.log(portfolios,'portfoliosss_portfoliosss')
  return (
    <section className="w-full">

     {/* =====================================
          LOADING
      ===================================== */}


      {loading ? (

        <div className="flex items-center justify-center">
        <Loader size='large' color='blue'/>
        </div>

      ) : (

        <>

          {/* =====================================
              Portfolio CARDS
          ===================================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {portfolios?.map((student, index) => (
          <div
            key={student.student_name}
            className="group h-full flex min-w-0 items-center gap-3 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" >
            {/* Student Image */}
            <div className="relative h-[125px] w-[42%] shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-[42%]">
              <Image
                // src={student.image}
                src={student.image_url}
                alt={student.student_name}
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 1280px) 21vw, 14vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Student Details */}
            <div className="flex min-w-0 flex-1 flex-col justify-center py-1">

              {/* Country */}
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-sm font-bold text-blue-700">
                  {student.country_name}
                </span>
              </div>

              {/* Name */}
              <h3 className="truncate text-sm font-bold text-[#14264F] sm:text-[15px]">
                {student.student_name}
              </h3>

              {/* University */}
              <p className="mt-1 text-xs leading-[1.4] text-slate-700">
                {student.university_name}
              </p>

              {/* Course */}
              <p className="mt-0.5 text-xs leading-[1.4] text-slate-600">
                {student.degree_name}
              </p>

              {/* Intake */}
              <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-slate-700">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                <span>Intake: {student.admission_date}</span>
              </div>

              {/* Admission Badge */}
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#32B65A] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="9" fill="white" />
                    <path
                      d="m6 10 2.5 2.5L14 7"
                      stroke="#32B65A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Admitted
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>



               {/* =====================================
                    EMPTY STATE
                ===================================== */}
      
                {portfolios.length === 0 && (
      
                  <FadeIn delay={0.12}>
      
                    <div className="glass-panel p-8 relative overflow-hidden rounded-[28px] flex items-center justify-center">
      
                      <Image
                        src="/empty.png"
                        alt="portfolios image"
                        height={1000}
                        width={1000}
                        className="object-contain w-[500px] h-[400px]"
                      />
      
                    </div>
      
                  </FadeIn>
      
                )}


        </>
      )}


         {/* =====================================
              PAGINATION
          ===================================== */}

          {totalPages > 1 && (

            <div className="flex items-center justify-center gap-2 pt-10">

              {/* Previous */}

              <button
                type="button"
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  handlePageChange(
                    currentPage - 1
                  )
                }
                className="
                  h-9
                  min-w-9
                  rounded-md
                  border
                  border-[#dfe6f0]
                  bg-white
                  px-3
                  text-sm
                  text-[#526078]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  hover:bg-[#f5f8fc]
                "
              >
                Previous
              </button>

              {/* Page Numbers */}

              {paginationPages.map(
                (page) => (

                  <button
                    key={page}
                    type="button"
                    onClick={() =>
                      handlePageChange(
                        page
                      )
                    }
                    className={`
                      h-9
                      min-w-9
                      rounded-md
                      border
                      px-3
                      text-sm
                      font-medium
                      transition

                      ${
                        currentPage ===
                        page
                          ? "border-[#1554c7] bg-[#1554c7] text-white"
                          : "border-[#dfe6f0] bg-white text-[#526078] hover:bg-[#f5f8fc]"
                      }
                    `}
                  >
                    {page}
                  </button>

                )
              )}

              {/* Next */}

              <button
                type="button"
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  handlePageChange(
                    currentPage + 1
                  )
                }
                className="
                  h-9
                  min-w-9
                  rounded-md
                  border
                  border-[#dfe6f0]
                  bg-white
                  px-3
                  text-sm
                  text-[#526078]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  hover:bg-[#f5f8fc]
                "
              >
                Next
              </button>

            </div>

          )}
        {/* <div>
        <Pagination3 
         currentPage={1}
         totalPages={10}
         paginationPages={paginationPages}
         handlePageChange={(page:number) => console.log(`Page changed to: ${page}`)}
        />
    </div> */}
    </section>
  );
}
