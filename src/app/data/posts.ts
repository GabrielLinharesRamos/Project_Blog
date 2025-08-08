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
];