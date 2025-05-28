import { Publications } from "@/components/publications";
import { PublicationsJsonLd } from "@/components/publications-json-ld";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export default function Home() {
  return (
    <>
      <PublicationsJsonLd />
      <BreadcrumbJsonLd />
      <Publications />
    </>
  );
}
