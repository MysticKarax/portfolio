<template>
  <section id="career" class="py-20 bg-background-alt/30 dark:bg-background/50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" data-animation="fade-up">
          Career Path
        </h2>
        <div
          class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
          data-animation="scale-x"
          data-delay="200"
        ></div>
        <p
          class="text-lg text-accent-tertiary animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          My professional journey and experience across various roles and companies
        </p>
      </div>

      <!-- Statistics Display -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-24">
        <!-- Years of Experience -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="100"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <ClockIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title and Counter -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            <span class="counter" data-target="5">5</span>+ Years
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            In Tech Industry Experience
          </p>

          <!-- Additional details on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Technical Support</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Systems Administration</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Clients Worldwide -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="200"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <GlobeAltIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title and Counter -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            <span class="counter" data-target="140">140</span>+ Commits
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            Internship Work
          </p>

          <!-- Additional details on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Web Development</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Iterative Improvements</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Technical Documentation</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Completed Projects -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <ClipboardDocumentCheckIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title and Counter -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            <span class="counter" data-target="35">35</span>+ Pull Requests
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            Successful Contributions
          </p>

          <!-- Additional details on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Optimizing UI</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Optimizing Performance</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>GitHub Agile Workflow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Career Timeline -->
      <div class="relative career-timeline">
        <!-- Timeline line (visible on larger screens) -->
        <div
          class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-tertiary/30 transform -translate-x-1/2 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-accent-primary before:transform before:origin-top"
        ></div>

        <!-- Timeline Events -->
        <div class="space-y-12 md:space-y-0">
          <!-- Role 1: Web Developer Trainee -->
          <div class="timeline-item md:grid md:grid-cols-2 relative">
            <!-- Left column (even items) - visible on md+ screens -->
            <div class="hidden md:block"></div>

            <!-- Center dot - visible on md+ screens -->
            <div
              class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
            ></div>

            <!-- Right column (odd items) -->
            <div class="timeline-content md:pl-12 animate-on-scroll" data-animation="fade-right">
              <div
                class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
              >
                <span
                  class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                  >Feb 2025 - Present</span
                >
                <div class="flex items-start">
                  <div class="company-logo mr-4 flex-shrink-0">
                    <div
                      class="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-accent-tertiary/30"
                    >
                      <img
                        src="/career-imgs/zendlogic.webp"
                        alt="ZendLogic"
                        class="w-full h-full object-contain"
                        onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-text-primary mb-1">
                      Frontend Developer Trainee
                    </h3>
                    <h4 class="text-accent-primary mb-3">ZendLogic</h4>
                  </div>
                </div>
                <p class="text-accent-tertiary mb-4 mt-2">
                  Contributed to a product management platform by developing scalable frontend
                  features, optimizing code quality, and enhancing UI/UX for streamlined inventory
                  and operations workflows.
                </p>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Improved code maintainability by refactoring Vue.js components and removing
                      technical debt
                    </p>
                  </div>
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Collaborated cross-functionally to resolve build errors and ensure seamless
                      deployments
                    </p>
                  </div>
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Collaborated cross-functionally to resolve build errors and ensure seamless
                      deployments
                    </p>
                  </div>
                </div>

                <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                  <p class="text-sm text-accent-tertiary mb-2 font-medium">
                    Work Mode, Technologies & Tools
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Remote</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Vue 3</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >TypeScript</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Tailwind CSS</span
                    >
                  </div>
                </div>

                <div class="mt-4 pt-0">
                  <button
                    @click="toggleDetails(1)"
                    class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                  >
                    <span v-if="expandedItems[1]">Hide Details</span>
                    <span v-else>More Details</span>
                    <ChevronDownIcon
                      class="h-4 w-4 ml-1 transition-transform duration-300"
                      :class="{ 'rotate-180': expandedItems[1] }"
                    />
                  </button>

                  <div
                    v-if="expandedItems[1]"
                    class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                  >
                    <p class="text-text-secondary text-sm">
                      Collaborating with backend engineers and product teams, I bridged gaps between
                      design and functionality. From prototyping UI enhancements to troubleshooting
                      API integrations, my role ensured the platform met both user needs and
                      technical constraints in PLCO's automation ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Role 2: BigCommerce Tech Support -->
        <div class="timeline-item md:grid md:grid-cols-2 relative">
          <!-- Left column (odd items) -->
          <div class="timeline-content md:pr-12 animate-on-scroll" data-animation="fade-left">
            <div
              class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
            >
              <span
                class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                >Oct 2023 - Jan 2025
              </span>
              <div class="flex items-start">
                <div class="company-logo mr-4 flex-shrink-0">
                  <div
                    class="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-accent-tertiary/30"
                  >
                    <img
                      src="/career-imgs/bigcommerce.svg"
                      alt="TechVision Global"
                      class="w-full h-full object-contain"
                      onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-text-primary mb-1">BigCommerce Platform</h3>
                  <h4 class="text-accent-primary mb-3">Tech Support Representative</h4>
                </div>
              </div>
              <p class="text-accent-tertiary mb-4 mt-2">
                Empowered merchants to grow their ecommerce businesses by delivering exceptional
                technical support and troubleshooting solutions on the industry-leading SaaS
                platform
              </p>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Metrics-Driven: </span>
                    Added quantifiable achievements (e.g., ticket resolution rate) to mirror the
                    original example's style
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Tools Section: </span>
                    Highlighted relevant technologies (BigCommerce's Page Builder, SalesForce,
                    Zendesk) and basic coding skills (HTML/CSS/JS)
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Concise Narrative: </span>
                    Focused on outcomes (merchant growth, reduced tickets) to align with
                    BigCommerce's mission
                  </p>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                <p class="text-sm text-accent-tertiary mb-2 font-medium">
                  Work Mode, Technologies & Tools
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Remote</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >E-commerce</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >SaaS</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >SalesForce</span
                  >
                </div>
              </div>

              <div class="mt-4 pt-0">
                <button
                  @click="toggleDetails(2)"
                  class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                >
                  <span v-if="expandedItems[2]">Hide Details</span>
                  <span v-else>More Details</span>
                  <ChevronDownIcon
                    class="h-4 w-4 ml-1 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedItems[2] }"
                  />
                </button>

                <div
                  v-if="expandedItems[2]"
                  class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                >
                  <p class="text-text-secondary text-sm">
                    I bridged the gap between merchants and technology, ensuring seamless store
                    operations through troubleshooting, education, and proactive problem-solving. My
                    role combined technical expertise with customer empathy to drive merchant
                    success on the platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Center dot - visible on md+ screens -->
          <div
            class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
          ></div>

          <!-- Right column (even items) - visible on md+ screens -->
          <div class="hidden md:block"></div>
        </div>

        <!-- Role 3: Nubank -->
        <div class="timeline-item md:grid md:grid-cols-2 relative">
          <!-- Left column (even items) - visible on md+ screens -->
          <div class="hidden md:block"></div>

          <!-- Center dot - visible on md+ screens -->
          <div
            class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
          ></div>

          <!-- Right column (odd items) -->
          <div class="timeline-content md:pl-12 animate-on-scroll" data-animation="fade-right">
            <div
              class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
            >
              <span
                class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                >Jun 2022 - May 2023</span
              >
              <div class="flex items-start">
                <div class="company-logo mr-4 flex-shrink-0">
                  <div
                    class="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-accent-tertiary/30"
                  >
                    <img
                      src="/career-imgs/nubank.svg"
                      alt="ZendLogic"
                      class="w-full h-full object-contain"
                      onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-text-primary mb-1">
                    Product Acquisition Agent (Xpeer)
                  </h3>
                  <h4 class="text-accent-primary mb-3">Nubank</h4>
                </div>
              </div>
              <p class="text-accent-tertiary mb-4 mt-2">
                Drove fanatical customer loyalty by building meaningful relationships and delivering
                standout support experiences in Nu's digital-first banking ecosystem
              </p>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Boosted Customer Advocacy: </span>Personalized
                    high-touch support for thousands of clients, resolving pain points with tailored
                    solutions that strengthened trust
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Regulatory Collaboration: </span>Partnered with
                    legal teams to streamline compliance workflows, ensuring seamless adherence to
                    Mexico's banking regulations
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Community Growth: </span>Cultivated a 200-member
                    client ambassador program (Xpeer) through proactive engagement and exclusive
                    onboarding
                  </p>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                <p class="text-sm text-accent-tertiary mb-2 font-medium">
                  Work Mode, Technologies & Tools
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Remote</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Zendesk</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Slack</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Twilio
                  </span>
                </div>
              </div>

              <div class="mt-4 pt-0">
                <button
                  @click="toggleDetails(1)"
                  class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                >
                  <span v-if="expandedItems[1]">Hide Details</span>
                  <span v-else>More Details</span>
                  <ChevronDownIcon
                    class="h-4 w-4 ml-1 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedItems[1] }"
                  />
                </button>

                <div
                  v-if="expandedItems[1]"
                  class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                >
                  <p class="text-text-secondary text-sm">
                    I fused empathy with data to turn customer interactions into long-term loyalty.
                    By diagnosing systemic issues and advocating for product tweaks—from UX flows to
                    regulatory compliance—I helped scale Nubank's reputation as Latin America's most
                    loved bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Role 4: iNet Academy -->
        <div class="timeline-item md:grid md:grid-cols-2 relative">
          <!-- Left column (odd items) -->
          <div class="timeline-content md:pr-12 animate-on-scroll" data-animation="fade-left">
            <div
              class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
            >
              <span
                class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                >May 2021 - May 2022
              </span>
              <div class="flex items-start">
                <div class="company-logo mr-4 flex-shrink-0">
                  <div
                    class="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-accent-tertiary/30"
                  >
                    <img
                      src="/career-imgs/inet.webp"
                      alt="iNet Academy"
                      class="w-full h-full object-contain"
                      onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-text-primary mb-1">iNet Academy</h3>
                  <h4 class="text-accent-primary mb-3">Desktop Support Technician</h4>
                </div>
              </div>
              <p class="text-accent-tertiary mb-4 mt-2">
                Spearheaded Linux migrations and IT infrastructure optimizations, delivering
                cost-effective solutions and seamless system performance for clients
              </p>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Led Windows-to-Ubuntu Migration: </span>
                    Eliminated licensing costs by 100% for 50+ workstations while improving system
                    efficiency and security
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Custom Hardware Solutions: </span>
                    Built and deployed 30+ Linux-based PCs tailored to client needs, ensuring
                    optimal performance and compatibility
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Technical Documentation: </span>
                    Authored 15+ knowledge base articles and user guides, reducing repeat support
                    tickets by 25%
                  </p>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                <p class="text-sm text-accent-tertiary mb-2 font-medium">
                  Work Mode, Technologies & Tools
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Hybrid</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Linux</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Bash Scripting</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Hardware Assembly</span
                  >
                </div>
              </div>

              <div class="mt-4 pt-0">
                <button
                  @click="toggleDetails(2)"
                  class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                >
                  <span v-if="expandedItems[2]">Hide Details</span>
                  <span v-else>More Details</span>
                  <ChevronDownIcon
                    class="h-4 w-4 ml-1 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedItems[2] }"
                  />
                </button>

                <div
                  v-if="expandedItems[2]"
                  class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                >
                  <p class="text-text-secondary text-sm">
                    I bridged the gap between legacy systems and modern Linux infrastructure. From
                    hands-on PC builds to training teams on open-source tools, my work empowered
                    clients to embrace scalable, cost-efficient technology without compromising
                    performance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Center dot - visible on md+ screens -->
          <div
            class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
          ></div>
          <!-- Right column (even items) - visible on md+ screens -->
          <div class="hidden md:block"></div>
        </div>
        <!-- Role 5: Call Centers -->
        <div class="timeline-item md:grid md:grid-cols-2 relative">
          <!-- Left column (even items) - visible on md+ screens -->
          <div class="hidden md:block"></div>

          <!-- Center dot - visible on md+ screens -->
          <div
            class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
          ></div>

          <!-- Right column (odd items) -->
          <div class="timeline-content md:pl-12 animate-on-scroll" data-animation="fade-right">
            <div
              class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
            >
              <span
                class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                >Mar 2017 - Apr 2021</span
              >
              <div class="flex items-start">
                <div class="company-logo mr-4 flex-shrink-0">
                  <div
                    class="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-accent-tertiary/30"
                  >
                    <img
                      src="/career-imgs/callcenters.webp"
                      alt="Call Centers"
                      class="w-full h-full object-contain"
                      onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-text-primary mb-1">
                    Customer Support Specialist
                  </h3>
                  <h4 class="text-accent-primary mb-3">
                    3+ Years of Customer-Centric Technical Support
                  </h4>
                </div>
              </div>
              <p class="text-accent-tertiary mb-4 mt-2">
                Delivered high-quality technical assistance across multiple call centers, resolving
                complex issues while maintaining exceptional service standards and driving customer
                satisfaction
              </p>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold"> Issue Resolution: </span>Addressed thousands of
                    support tickets with a 92% first-contact resolution rate
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Customer Satisfaction: </span>Delivered high-quality
                    technical assistance across multiple call centers, resolving complex issues
                    while maintaining exceptional service standards and driving customer
                    satisfaction
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    <span class="font-semibold">Customer Retention: </span>De-escalated hundreds of
                    high-priority cases, preserving client relationships and reducing churn
                  </p>
                </div>
                <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                  <p class="text-sm text-accent-tertiary mb-2 font-medium">Work Mode:</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >On-Site</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- MORE ROLES HERE -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {
  ClockIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';

// i18n removed - using direct English text

// Track which items are expanded
const expandedItems = ref({});

// Toggle details visibility
const toggleDetails = (id) => {
  expandedItems.value = {
    ...expandedItems.value,
    [id]: !expandedItems.value[id],
  };
};

// Animation on scroll functionality
onMounted(() => {
  // Animate elements on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animation || 'fade-up';
          const delay = el.dataset.delay || 0;

          setTimeout(() => {
            el.classList.add(`animate-${animation}`);
            el.style.opacity = 1;
          }, delay);

          // Unobserve after animation
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Animate counter numbers
  const countElements = document.querySelectorAll('.counter');

  // Create separate observer for counter elements
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          const duration = 2000; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            let progress = Math.min(elapsedTime / duration, 1);

            // Apply easing function for smoother animation
            progress = easeOutQuad(progress);

            // Calculate current count
            const currentCount = Math.floor(progress * target);
            el.textContent = currentCount + (el.dataset.target.includes('+') ? '+' : '');

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = el.dataset.target;
            }
          };

          requestAnimationFrame(updateCounter);

          // Unobserve after animation
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  countElements.forEach((el) => {
    counterObserver.observe(el);
  });

  // Add animation class to timeline line
  const timelineLine = document.querySelector('.career-timeline .md\\:block.absolute');
  if (timelineLine) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineLine.classList.add('animate-height');
            timelineObserver.unobserve(timelineLine);
          }
        });
      },
      { threshold: 0.1 },
    );
    timelineObserver.observe(timelineLine);
  }
});

// Easing function for smoother counter animation
function easeOutQuad(t) {
  return t * (2 - t);
}
</script>

<style scoped>
/* Animation classes */
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-fade-left {
  animation: fadeLeft 0.7s ease-out forwards;
}

.animate-fade-right {
  animation: fadeRight 0.7s ease-out forwards;
}

.animate-scale-x {
  animation: scaleX 0.7s ease-out forwards;
}

.animate-expand {
  animation: expand 0.3s ease-out forwards;
}

.animate-height {
  animation: growHeight 1.5s ease-out forwards;
}

/* Keyframe animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleX {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes expand {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

@keyframes growHeight {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* Timeline and card styling */
.timeline-item {
  margin-bottom: 2rem;
}

.timeline-date {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.career-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

/* Stats card transition */
.stat-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Mobile-specific timeline styling */
@media (max-width: 768px) {
  .timeline-item {
    position: relative;
    padding-left: 2rem;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(160, 160, 176, 0.3);
  }

  .timeline-item::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 1.5rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-primary, #a450e1);
  }

  .timeline-content {
    margin-bottom: 2rem;
  }
}
</style>
