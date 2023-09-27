export default function Page({ params }: { params: { slug: string } }) {
    return <div className="z-10 w-full max-w-xl px-5 xl:px-0">My Post: {params.slug}</div>
  }