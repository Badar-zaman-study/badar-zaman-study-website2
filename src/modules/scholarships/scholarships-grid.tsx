"use client";

import { useEffect, useMemo, useState } from "react";
import { ScholarshipCard2 } from "@/src/components/cards/scholarship-card2";
import { FadeIn } from "@/src/components/motion/fade-in";
import Image from "next/image";
import { toast } from "react-toastify";
import { createClient } from "@/src/utils/supabase/client";
import Loader from "@/src/components/Loader";

const PAGE_SIZE = 20;

const defaultFilters = {
  country: "All",
  degreeLevel: "All",
  intake: "All",
  university: "All",
  scholarshipType: "All",
  search: "",
};

type FilterType =
  | "all"
  | "present"
  | "upcoming"
  | "expired";

interface Scholarship {
  id: number;
  scholarship_name: string;
  country_name: string;
  admission_open_date: string;
  admission_close_date: string;
  youtube_video: string | null;
  detail: string;
  image_url: string;
  image_public_id: string;
  created_at: string;

  // Agar future mein ye fields table mein add karo
  degree_level?: string;
  intake?: string;
  university?: string;
  scholarship_type?: string;
}

export function ScholarshipsGrid() {
  const supabase = createClient();

  const [scholarships, setScholarships] = useState<
    Scholarship[]
  >([]);

  const [filters, setFilters] =
    useState(defaultFilters);

  const [active, setActive] =
    useState<FilterType>("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [totalCount, setTotalCount] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  // =========================================
  // FETCH SCHOLARSHIPS
  // =========================================

  const fetchScholarships = async () => {
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
        .from("scholarships")
        .select("*", {
          count: "exact",
        });

      // =========================================
      // STATUS FILTER
      // =========================================

      if (active === "present") {
        query = query
          .lte(
            "admission_open_date",
            today
          )
          .gte(
            "admission_close_date",
            today
          );
      }

      if (active === "upcoming") {
        query = query.gt(
          "admission_open_date",
          today
        );
      }

      if (active === "expired") {
        query = query.lt(
          "admission_close_date",
          today
        );
      }

      // =========================================
      // COUNTRY FILTER
      // =========================================

      if (filters.country !== "All") {
        query = query.eq(
          "country_name",
          filters.country
        );
      }

      // =========================================
      // SEARCH
      // =========================================

      const search =
        filters.search.trim();

      if (search) {
        query = query.or(
          `scholarship_name.ilike.%${search}%,country_name.ilike.%${search}%`
        );
      }

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

        setScholarships([]);
        setTotalCount(0);

        return;
      }

      setScholarships(
        (data || []) as Scholarship[]
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

  // =========================================
  // FETCH WHEN FILTER / PAGE / SEARCH CHANGES
  // =========================================

  useEffect(() => {
    fetchScholarships();
  }, [
    currentPage,
    active,
    filters.country,
    filters.search,
  ]);

  // =========================================
  // STATUS COUNTS
  // =========================================

  /*
    Important:

    Pagination ke saath total count
    filter ke hisaab se Supabase count
    deta hai.

    Lekin All / Present / Upcoming /
    Expired ke individual counts ke liye
    alag queries chahiye.

    Filhal tabs mein count total
    matching records ka rakha gaya hai.
  */

  const totalPages = Math.ceil(
    totalCount / PAGE_SIZE
  );

  // =========================================
  // COUNTRY OPTIONS
  // =========================================

  const countryOptions = useMemo(() => {
    const countries = scholarships
      .map(
        (item) => item.country_name
      )
      .filter(Boolean);

    return [
      "All",
      ...Array.from(
        new Set(countries)
      ),
    ];
  }, [scholarships]);

  // =========================================
  // FILTER CHANGE
  // =========================================

  const handleFilterChange = (
    newFilter: FilterType
  ) => {
    setActive(newFilter);

    // Filter change par page 1
    setCurrentPage(1);
  };

  // =========================================
  // SEARCH CHANGE
  // =========================================

  const handleSearchChange = (
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));

    // Search change par page 1
    setCurrentPage(1);
  };

  // =========================================
  // COUNTRY CHANGE
  // =========================================

  const handleCountryChange = (
    country: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      country,
    }));

    setCurrentPage(1);
  };

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

    // Scroll back to scholarship section
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

  return (
    <section className="pb-10 pt-10">

      {/* =====================================
          FILTER BAR
      ===================================== */}

      <div className="w-full flex gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-between py-7">

        {/* Filter Tabs */}

        <div className="h-[30px] sm:h-[52px] flex items-center rounded-[9px] border border-[#e8edf5] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.03),0_4px_12px_rgba(15,23,42,0.025)]">

          {[
            {
              label: "All Scholarships",
              type: "all",
            },
            {
              label: "Present",
              type: "present",
              dot: "bg-green-500",
            },
            {
              label: "Upcoming",
              type: "upcoming",
              dot: "bg-yellow-400",
            },
            {
              label: "Expired",
              type: "expired",
              dot: "bg-red-500",
            },
          ].map((item: any) => {

            const isActive =
              active === item.type;

            return (
              <button
                key={item.type}
                onClick={() =>
                  handleFilterChange(
                    item.type
                  )
                }
                className={`
                  h-[30px] sm:h-[50px]
                  flex items-center justify-center
                  gap-[3px] sm:gap-[10px]
                  border-0
                  whitespace-nowrap
                  cursor-pointer
                  text-[8px] sm:text-[13px]
                  font-semibold
                  transition-all duration-200

                  ${
                    item.type === "all"
                      ? "md:min-w-[200px] px-3 md:px-6"
                      : "md:min-w-[162px] px-3 md:px-6"
                  }

                  ${
                    isActive
                      ? "bg-[#1554c7] text-white rounded-[6px] shadow-[0_1px_3px_rgba(21,84,199,0.2)]"
                      : "bg-transparent text-[#526078]"
                  }
                `}
              >

                {/* Status Dot */}

                {item.dot && (
                  <span
                    className={`
                      w-2
                      h-2
                      shrink-0
                      rounded-full
                      ${item.dot}
                    `}
                  />
                )}

                {/* Label */}

                <span className="leading-none">
                  {item.label}
                </span>

              </button>
            );
          })}

        </div>

        {/* SEARCH */}

        <div className="relative w-[279px] h-[40px]">

          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              handleSearchChange(
                e.target.value
              )
            }
            placeholder="Search scholarships..."
            className="
              w-full
              h-[40px]
              pl-[15px]
              pr-[43px]
              rounded-[7px]
              border
              border-[#dfe6f0]
              outline-none
              bg-white
              text-[#334155]
              text-[12px]
              font-normal
              placeholder:text-[#9aa6b8]
              focus:border-[#b8c9e8]
              focus:ring-[3px]
              focus:ring-[#1554c7]/[0.07]
              transition-all
            "
          />

          {/* Search Icon */}

          <svg
            className="absolute right-[13px] top-1/2 -translate-y-1/2 text-[#718096] pointer-events-none"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M16.5 16.5L21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

        </div>

      </div>

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
              SCHOLARSHIP CARDS
          ===================================== */}

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {scholarships.map(
              (
                scholarship: any,
                index: number
              ) => (

                <FadeIn
                  key={scholarship.id}
                  delay={index * 0.12}
                >
                  <ScholarshipCard2
                    scholarship={scholarship}
                  />
                </FadeIn>

              )
            )}

          </div>

          {/* =====================================
              EMPTY STATE
          ===================================== */}

          {scholarships.length === 0 && (

            <FadeIn delay={0.12}>

              <div className="glass-panel p-8 relative overflow-hidden rounded-[28px] flex items-center justify-center">

                <Image
                  src="/no data found.webp"
                  alt="scholarships image"
                  height={1000}
                  width={1000}
                  className="object-contain w-[500px] h-[400px]"
                />

              </div>

            </FadeIn>

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

        </>

      )}

    </section>
  );
}