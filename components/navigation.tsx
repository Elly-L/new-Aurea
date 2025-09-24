import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="glass-nav rounded-full px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/aurea-logo.png" alt="Aurea Intelligence" width={32} height={32} className="rounded-full" />
            <span className="text-lg font-bold text-foreground hidden sm:block">Aurea Intelligence</span>
          </div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 btn-primary-hover">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
