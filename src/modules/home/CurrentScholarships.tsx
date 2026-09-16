"use client"
import React, { useEffect, useState } from 'react'
import { ScholarshipCard2 } from '@/src/components/cards/scholarship-card2'
import Heading from '@/src/components/Heading'
import { FadeIn } from '@/src/components/motion/fade-in'
import { ArrowRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/src/utils/supabase/client'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Loader from '@/src/components/Loader'

const CurrentScholarships = () => {
  const supabase = createClient();
  const [scholarships, setScholarships] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  // =========================================
    // FETCH SCHOLARSHIPS
    // =========================================
  
    const fetchScholarships = async () => {
      try {
      setLoading(true);
  
      const { data, error } = await supabase
      .from("scholarships")
      .select("id, image_url, country_name, image_public_id, scholarship_name, admission_open_date, admission_close_date")
      .order("created_at", { ascending: false })
      .limit(4);
  
        if (error) {
          console.error(
            "Supabase Error:",
            error
          );
  
          toast.error(error.message);
  
          setScholarships([]);
  
          return;
        }
  
        setScholarships(data || []);
  
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
    }, []);




    console.log(scholarships,'scholarshipsscholarships_scholarshipsssw')
  return (
    <div>
      <section className="">
        <Heading
          icon={GraduationCap}
          title="Current Scholarships"
          description="Explore current scholarship opportunities to reduce study costs and make your international education more affordable"
        />

      {loading ? (

        <div className="min-h-[300px] flex items-center justify-center">
          <Loader size='large' color='blue'/>
        </div>

      ) : (

         <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {scholarships.slice(0, 4).map((scholarship:any, index:any) => (
            <FadeIn key={scholarship?.id} delay={index * 0.12}>
              <ScholarshipCard2 scholarship={scholarship} />
            </FadeIn>
          ))}
        </div>

      )}

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

       

       {scholarships.length > 0 && (
        <div className="flex items-center justify-end mt-5">
            <Link href="/scholarships" className="btn-secondary !border !border-blue-500">
              View all scholarships <ArrowRight size={17} />
            </Link>
        </div>
       )}

      </section>
    </div>
  )
}

export default CurrentScholarships
