import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#e6ffed,_transparent),linear-gradient(180deg,#f7fbf9,white)]">
      <Navbar />

      <main className="py-12">
        <div className="container">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
