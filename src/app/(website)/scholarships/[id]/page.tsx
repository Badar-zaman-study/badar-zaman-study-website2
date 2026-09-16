import { ScholarshipDetail } from "@/src/modules/detail-scholarship/index";
import { createClient } from "@/src/utils/supabase/server";



export default async function ScholarshipDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

   const supabase = await createClient();

  // ============================
  // FETCH SCHOLARSHIP
  // ============================

  console.log(id , "scholarship_id")

   const {
    data: scholarship,
    error,
  } = await supabase
    .from("scholarships")
    .select("*")
    .eq("id", id)
    .single();

  // if (error || !scholarship) {
  //   notFound();
  // }


  return <ScholarshipDetail scholarship={scholarship} />;
}
