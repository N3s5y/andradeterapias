import Header from "./Header";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description || "This page is coming soon. Please continue prompting to have me fill in the content for this page."}
          </p>
          <div className="bg-brand/10 border border-brand/20 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-brand font-medium">
              Continue prompting to add content to this page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
