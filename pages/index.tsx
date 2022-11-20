import Head from 'next/head'
import Image from 'next/image'

import { Barlow_Semi_Condensed } from '@next/font/google'

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap'
})


export default function Home() {
  return (
    <div className={barlowSemiCondensed.className}>
      <Head>
        <title>Testimonials grid</title>
        <meta name="description" content="Testimonials grid" />
        <meta name="author" content="Moro Samuele" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main__container">
          <div className="main__columnsTestimonials">
            <div className="main__leftTestimonials">
              <div className="main__firstRowTestimonials">
                <div className="main__testimonialCardContainer main__testimonialCardContainer--violet main__testimonialCardContainer--quoted">
                  <div className="testimonialCardContainer__cardTestimonial">
                    <Image
                      src="/images/image-daniel.jpg"
                      alt="Daniel Clifford"
                      width="34"
                      height="34"
                    />
                    <div className="testimonialCardContainer__testimonialInfo">
                      <p>Daniel Clifford</p>
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                  <h3>
                    I received a job offer mid-
                    course, and the subjects I
                    learned were current, if not more
                    so, in the company I joined. I
                    honestly feel I got every penny&#39;s worth
                  </h3>
                  <p>
                    &rdquo;I was in EMT for many years before I joined the
                    bootcamp. I&#39;ve been looking to make a transition
                    and have heard some people who had an
                    amazing experience here. I signed up for the
                    free intro courses and found it incredibly fun! I
                    enrolled shortly thereafter. The next 12 weeks
                    was the best - and most grueling - time of my
                    life. Since completing the course, I&#39;ve
                    successfully switched careers, working as a
                    Software Engineer at a VR startup.&rdquo;
                  </p>
                </div>

                <div className="main__testimonialCardContainer main__testimonialCardContainer--darkGrayishBlue">
                  <div className="testimonialCardContainer__cardTestimonial">
                    <Image
                      src="/images/image-jonathan.jpg"
                      alt="Jonathan Walters"
                      width="34"
                      height="34"
                    />
                    <div className="testimonialCardContainer__testimonialInfo">
                      <p>Jonathan Walters</p>
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                  <h3>
                    The team was very supportive and kept me motivated
                  </h3>
                  <p>
                    &rdquo;I started as a totale newbie with virtually no coding
                    skills, I now work as a mobile engineer for a big
                    company. This was one o the best investments I&#39;ve
                    made in myself.&rdquo;
                  </p>
                </div>
              </div>
              <div className="main__secondRowTestionials">
                <div className="main__testimonialCardContainer main__testimonialCardContainer--fullWhite">
                  <div className="testimonialCardContainer__cardTestimonial">
                    <Image
                      src="/images/image-jeanette.jpg"
                      alt="Jeanette Harmon"
                      width="34"
                      height="34"
                    />
                    <div className="testimonialCardContainer__testimonialInfo">
                      <p>Jeanette Harmon</p>
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                  <h3>
                    An overlall wonderful and rewarding experience
                  </h3>
                  <p>
                    &rdquo;Thank you for the wonderful experience! I now
                    have a job I really enjoy, and make a good living
                    while doing something I love.&rdquo;
                  </p>
                </div>

                <div className="main__testimonialCardContainer main__testimonialCardContainer--darkBlackishBlue">
                  <div className="testimonialCardContainer__cardTestimonial">
                    <Image
                      src="/images/image-patrick.jpg"
                      alt="Patrick Abrams"
                      width="34"
                      height="34"
                    />
                    <div className="testimonialCardContainer__testimonialInfo">
                      <p>Patrick Abrams</p>
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                  <h3>
                    Awesome teaching support from
                    TAs who did the bootcamp
                    themselves. Getting guidance
                    from them and learning from
                    their experiences was easy.
                  </h3>
                  <p>
                    &rdquo;The staff seem genuinely concerned about my
                    progress which I find really refreshing. The
                    program gave me the confidence necessary to be
                    able to go out in the world and present myself as a
                    capable junior developer. The standard is above the
                    rest. You will get the personal attention you need
                    from an incredible community of smart and
                    amazing people.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="main__testimonialCardContainer main__testimonialCardContainer--fullWhite">
              <div className="testimonialCardContainer__cardTestimonial">
                <Image
                  src="/images/image-kira.jpg"
                  alt="Kira Whittle"
                  width="34"
                  height="34"
                />
                <div className="testimonialCardContainer__testimonialInfo">
                  <p>Kira Whittle</p>
                  <span>Verified Graduate</span>
                </div>
              </div>
              <h3>
                Such a life-changing experience. Highly recommended!
              </h3>
              <p>
                &rdquo;Before joining the bootcamp, I&#39;ve never written a
                line of code. I needed some structure from
                professionals who can help me learn programming
                step by step. I was encouraged to enroll by a
                former student of theirs who can only say
                wonderful things about the program. The entire
                curriculum and staff did not disappoint. They were
                very hands-on and I never had to wait long for
                assistance. The agile team project, in particular,
                was outstanding. It took my learning to the next
                level in a way that no tutorial could ever have. In
                fact, I&#39;ve often referred to it during interviews as an
                example of my developent experience. It certainly
                helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
