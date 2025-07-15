// TODO: create header and footer components

// import { notFound } from 'next/navigation';
// import Link from 'next/link';

// const post = {
//   title: 'Testing against every Next.js canary release',
//   author: 'François Best',
//   date: '2023-11-06',
//   readingTime: '6 min read',
//   tags: ['next.js', 'github-actions', 'testing'],
//   content: `
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a augue in ligula iaculis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
//     <p>Proin porttitor convallis nisi, vitae egestas sapien sodales nec. Morbi vestibulum, elit nec gravida feugiat, ex neque tristique lacus, at dictum massa sem id sapien.</p>
//     <p>Integer accumsan, eros ut ullamcorper iaculis, sapien quam hendrerit sem, id lacinia risus justo nec purus. Vestibulum sit amet tellus sapien.</p>
//   `,
// };

// // TODO: add metadata for SEO

// export default function PostPage() {
//   if (!post) return notFound();

//   return (
//     <main className="max-w-screen-md mx-auto gap-4 sm:gap-6 px-3 sm:px-4 md:px-6 my-4 sm:my-6">
//       <article className="prose prose-neutral dark:prose-invert max-w-none grid gap-3">
//         <header>
//           <h1 className="text-xl sm:text-md md:text-lg font-bold tracking-tight text-foreground mb-2">
//             {post.title}
//           </h1>

//           <div className="mb-4 flex items-center flex-wrap gap-2">
//             <div>
//               <p className="text-sm text-muted-foreground">
//                 {post.author} •{' '}
//                 {new Date(post.date).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}{' '}
//                 • {post.readingTime}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {post.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </header>

//         <section
//           className="text-base leading-relaxed text-foreground"
//           dangerouslySetInnerHTML={{ __html: post.content }}
//         />
//       </article>

//       <div className="flex justify-end mt-6">
//         <Link
//           href="/posts"
//           className="py-1 underline transition-colors duration-200 hover:text-primary"
//         >
//           ← Back to blog
//         </Link>
//       </div>
//     </main>
//   );
// }
