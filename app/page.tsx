import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe2, Code2, Blocks } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Learn Web3 and Metaverse Development
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join Panaverse DAO to become a certified Web3 and Metaverse developer. Our program is designed to help you master the technologies of tomorrow.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/curriculum">
                    View Curriculum <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/about">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Panaverse</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to become a Web3 developer
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive program covers all aspects of Web3 and Metaverse development, from blockchain basics to advanced decentralized applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  {feature.icon}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Web3 Technologies',
    description: 'Master blockchain, smart contracts, and decentralized applications with hands-on projects and expert guidance.',
    icon: <Globe2 className="h-5 w-5 text-primary" />,
    href: '/curriculum#web3',
  },
  {
    name: 'Metaverse Development',
    description: 'Learn to create immersive 3D experiences and virtual worlds using cutting-edge technologies.',
    icon: <Blocks className="h-5 w-5 text-primary" />,
    href: '/curriculum#metaverse',
  },
  {
    name: 'Full-Stack Development',
    description: 'Build modern web applications using Next.js, TypeScript, and other industry-standard tools.',
    icon: <Code2 className="h-5 w-5 text-primary" />,
    href: '/curriculum#full-stack',
  },
]