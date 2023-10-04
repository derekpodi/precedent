import { Links } from "@/components/links";

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <div className="z-10 w-full max-w-4xl">
        <p className="text-xl">My Post: {params.slug}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed explicabo, deleniti fuga eligendi velit officia error non modi facilis quos mollitia saepe! Quibusdam debitis ab hic fugit distinctio ipsa? Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae non, error labore dolores vero odio nesciunt impedit consequuntur hic? Ad, hic optio? Autem blanditiis molestias veritatis debitis officia placeat.</p>
      </div>
    );
  }