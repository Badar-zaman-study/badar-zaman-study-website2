"use client";
import { getYoutubeEmbedUrl } from "@/src/lib/func";
import "react-quill-new/dist/quill.snow.css";

const DetailData = ({scholarship}:any) => {

  console.log(scholarship,'scholarshipscholarship112w2')

  return (
    <div className="mx-auto p-6">

      {/* =========================
          USER SIDE PREVIEW
      ========================== */}
          <article
            className="
              ql-editor

              /* H1 */
              [&_h1]:text-2xl
              [&_h1]:font-extrabold
              [&_h1]:text-blue-500
              [&_h1]:my-3

              /* H2 */
              [&_h2]:text-xl
              [&_h2]:font-extrabold
              [&_h2]:text-blue-500
               [&_h2]:my-3

              /* H3 */
              [&_h3]:text-lg
              [&_h3]:font-extrabold
              [&_h3]:text-blue-500
               [&_h3]:my-3

              /* Paragraph */
              [&_p]:text-base

              /* Empty paragraphs = line gaps */
              [&_p:empty]:min-h-[1.5rem]

              /* Lists */
              [&_ul]:my-3
              [&_ol]:my-3

              /* Links */
              [&_a]:text-blue-500
              [&_a]:underline

              /* Strong */
              [&_strong]:font-bold

              [&_*]:!bg-transparent
            "
            dangerouslySetInnerHTML={{
              __html: scholarship?.detail,
            }}
          />
      

     

    {scholarship?.youtube_video &&
  getYoutubeEmbedUrl(scholarship.youtube_video) && (
    <div className="my-3 w-full overflow-hidden rounded-xl">
      <div className="relative aspect-video w-full">
        <iframe
          src={getYoutubeEmbedUrl(scholarship.youtube_video) || undefined}
          title="YouTube video"
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        />
      </div>
    </div>
  )}

    </div>
  );
};

export default DetailData;