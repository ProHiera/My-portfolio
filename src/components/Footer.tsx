export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container text-sm opacity-70 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Nara Lee. All rights reserved.</p>
        <p>Built with Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
