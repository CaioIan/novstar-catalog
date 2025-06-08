import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full pt-16 max-w-[1024px] mx-auto flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}