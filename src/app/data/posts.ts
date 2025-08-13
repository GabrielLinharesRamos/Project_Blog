export type Post = {
  title: string;
  href: string;
  content: string;
  views: string;
  date: string;
};

export const posts: Post[] = [
  {
    title: 'Real-Time People Detection with YOLO',
    href: 'page1',
    content:
      'This post describes the development of an application for real-time person recognition, using the Python language together with the YOLO and OpenCV libraries.',
    views: '12k',
    date: '12,july',
  },
  {
    title: 'Gamesir G8 galileo',
    href: 'page2',
    content:
      'The mobile gaming revolution nobody’s talking about — and why it will change everything',
    views: '12k',
    date: '08,august',
  },
  {
    title: 'Django + Next.js',
    href: 'page3',
    content:
      "How to combine the power of Django's robust backend with the performance and interactivity of Next.js to create modern, fast, and scalable web applications.",
    views: '12k',
    date: '10,august',
  },
];