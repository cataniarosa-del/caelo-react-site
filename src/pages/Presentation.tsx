import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/LanguageContext";

export default function Presentation() {
  const { lang } = useLanguage();

  const pdf = "/documents/CAELO_Executive_Presentation_2026.pdf";

  return (
    <Layout>
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {lang === "it" ? "Torna al sito" : "Back to website"}
            </Button>
          </Link>

          <div className="mt-8 mb-8 text-center">
            <h1 className="text-5xl font-bold">CAELO</h1>

            <h2 className="text-2xl text-muted-foreground mt-3">
              Executive Presentation
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              {lang === "it"
                ? "Presentazione istituzionale della piattaforma CAELO."
                : "Corporate presentation of the CAELO platform."}
            </p>

            <a href={pdf} target="_blank" rel="noopener noreferrer">
              <Button className="mt-8">
                <Download className="mr-2 h-4 w-4" />
                {lang === "it" ? "Apri il PDF" : "Open PDF"}
              </Button>
            </a>
          </div>

          <iframe
            src={pdf}
            title="CAELO Executive Presentation"
            className="w-full rounded-xl border"
            style={{ height: "900px" }}
          />
        </div>
      </section>
    </Layout>
  );
}
