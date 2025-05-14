interface GoogleMapProps {
  className?: string
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5506698557!2d20.103434499999998!3d41.1277659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135043124171d4fd%3A0x18374426af9fabfa!2sPanorama%20Resort!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Panorama Resort Location"
          aria-label="Google Maps showing Panorama Resort location in Elbasan, Albania"
        ></iframe>
      </div>
    </div>
  )
}
