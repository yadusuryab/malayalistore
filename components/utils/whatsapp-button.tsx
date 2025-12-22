import { Button } from "@/components/ui/button"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
     <Link href={`${process.env.NEXT_PUBLIC_WHATSAPP}` || `https://wa.me/+919495314108?text=Malayali+Store+Unavailable+Please+contact+me`} target="_blank" rel="noopener noreferrer">
     <Button
        className="relative rounded-full !w-15 !h-15 bg-green-500/80 backdrop-blur-md border border-white/20 shadow-lg shadow-green-500/20 animate-bounce-subtle hover:scale-110 hover:shadow-xl hover:shadow-green-500/30 active:scale-95 transition-all duration-300"
        size={"icon"}
      >
        {/* Glass effect highlight */}
        <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full animate-ping-slow opacity-75 bg-green-400" />

        <IconBrandWhatsapp className="!w-10 !h-10 relative z-10" />
      </Button>
      </Link>
    </div>
  )
}
