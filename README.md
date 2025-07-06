# yurimutti.com

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/yurimutti/yurimutti.com
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run locally
   ```sh
   npm run dev
   ```

## Contact

Yuri Mutti - [@yuri_mutti](https://twitter.com/yuri_mutti) - contato@yurimutti.com

Project Link: [https://github.com/yurimutti](https://github.com/yurimutti)

This is the source code for my personal website and blog, hosted at https://francoisbest.com

Built with:

Next.js
TailwindCSS
TypeScript
MDX
Inspiration & Thanks
Lee Robinson
Juan Olvera
Max Stoiber
Guillermo Rauch
And many others!

License
Inspiration is welcome
No plagiarism
Made with ❤️ by François Best - Sponsor my work

mxstbr.com
This is the source for my personal website and blog mxstbr.com.

Tech Stack
Next.js v15
TailwindCSS
TypeScript
MDX
Development
pnpm install
pnpm dev
Env vars

# Used to get the repositories of my OSS projects. Get from github.com

GITHUB_ACCESS_TOKEN=

# Used to store view counts of essays & notes. Get from upstash.com

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN==

# Used to store the notes content. Get from Hashnode.com

HASHNODE_ACCESS_TOKEN=

# Optional: Used to send emails to Max from the feedback form. Get from resend.com

RESEND_API_KEY=

# Optional: Used on the /cal page for auth. Pick any random string.

CAL_PASSWORD=
License
Licensed under the MIT License. Feel free to use parts of the code in your own projects with attribution!

blog
This is the blog that powers rauchg.com, built on next.js and deployed to the cloud via Vercel.

How to run
First, install Vercel CLI.

Development
vc dev
Deployment
Staging
vc
This is the equivalent of submitting a PR with the GitHub integration

Production
vc --prod
This is the equivalent of git push to master (or merging a PR to master)

Architecture
Pure components
Every stateless pure component is found under ./components.

Every component that has to do with styling the post's markup is found under ./components/post/

These components make up the style guide of the application.

Blog posts
Every blog post is a static page hosted under pages/$year/.

This allows every post to load arbitrary modules, have custom layouts and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the rest of the site.

An index of all posts is maintained in JSON format as ./posts.json for practical reasons.
