export const principlesData = [
  {
    tag: '01 / DISCOVERY & PROFILING',
    title: 'Inspect raw data before choosing abstractions',
    sub: 'Assumptions are where pipelines go to die.',
    desc: 'Real data is full of surprises: broken PDF OCR encodings, shifted timestamp zones, silent schema drift. I profile the actual raw inputs and pathological edge cases on day one before picking an architecture or writing a line of business logic.'
  },
  {
    tag: '02 / RISK ELIMINATION',
    title: 'Prototype the hardest technical bottleneck first',
    sub: 'No six-week black box builds.',
    desc: 'Whether it’s inference latency on local hardware, extraction accuracy on degraded scans, or transaction idempotency under concurrent writes, we validate the riskiest component with an end-to-end working prototype in the first sprint.'
  },
  {
    tag: '03 / RESILIENCE BY DEFAULT',
    title: 'Build for edge cases, retries & zero silent failures',
    sub: 'Happy paths are easy; real software lives in edge cases.',
    desc: 'Pipelines get exponential backoff retries, transactional outbox patterns guarantee exactly-once message delivery, and healthcare pipelines operate with strict offline guarantees so patient data never leaks.'
  },
  {
    tag: '04 / ZERO HOSTAGE HANDOFF',
    title: 'Zero lock-in: when it ships, your team owns it',
    sub: 'No cryptic dependencies or hostage maintenance.',
    desc: 'You get clean Git repositories, pinned dependencies, self-contained Dockerfiles, and documentation written for real developers. If I step away tomorrow, your internal engineers can run, inspect, and extend the system without friction.'
  }
];
