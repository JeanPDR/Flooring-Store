/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pEu2LHtaaQx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Component() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Slide 1 Title</h3>
                <p className="text-muted-foreground">
                  This is the description for the first slide. It provides a
                  brief overview of the content.
                </p>
              </div>
              <img
                src="/placeholder.svg"
                alt="Slide 1"
                width={1200}
                height={675}
                className="aspect-video object-cover rounded-md"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt="Slide 2"
                width={800}
                height={450}
                className="aspect-video object-cover rounded-md"
              />
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Slide 2 Title</h3>
                <p className="text-muted-foreground">
                  This is the description for the second slide. It provides a
                  brief overview of the content.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt="Slide 3"
                width={800}
                height={450}
                className="aspect-video object-cover rounded-md"
              />
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Slide 3 Title</h3>
                <p className="text-muted-foreground">
                  This is the description for the third slide. It provides a
                  brief overview of the content.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
