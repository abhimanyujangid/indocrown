/** Grid column span (of 12) — controls relative width like Pinterest tiles. */
export type DummyGalleryImage = {
  id: string;
  src: string;
  alt?: string;
  /** Number of columns (1–12) this tile spans at `md` and up; mobile is always full width. */
  colSpan: number;
};

/** Local gallery assets from `public/gallery` (served from `/gallery/...`). */
export const DUMMY_GALLERY_IMAGES: DummyGalleryImage[] = [
  { id: '1', src: '/gallery/1.jpeg', colSpan: 4, alt: 'Gallery image 1' },
  { id: '2', src: '/gallery/2.jpeg', colSpan: 8, alt: 'Gallery image 2' },
  { id: '3', src: '/gallery/3.jpeg', colSpan: 4, alt: 'Gallery image 3' },
  { id: '4', src: '/gallery/4.jpeg', colSpan: 4, alt: 'Gallery image 4' },
  { id: '5', src: '/gallery/5.jpeg', colSpan: 4, alt: 'Gallery image 5' },
  { id: '6', src: '/gallery/6.jpeg', colSpan: 8, alt: 'Gallery image 6' },
  { id: '7', src: '/gallery/7.jpeg', colSpan: 4, alt: 'Gallery image 7' },
  { id: '8', src: '/gallery/8.jpeg', colSpan: 5, alt: 'Gallery image 8' },
  { id: '9', src: '/gallery/9.jpeg', colSpan: 12, alt: 'Gallery image 9' },
  { id: '10', src: '/gallery/10.jpeg', colSpan: 4, alt: 'Gallery image 10' },
  { id: '11', src: '/gallery/11.jpeg', colSpan: 8, alt: 'Gallery image 11' },
  { id: '12', src: '/gallery/12.jpeg', colSpan: 6, alt: 'Gallery image 12' },
  { id: '13', src: '/gallery/13.jpeg', colSpan: 6, alt: 'Gallery image 13' },
  { id: '14', src: '/gallery/14.jpeg', colSpan: 7, alt: 'Gallery image 14' },
  { id: '15', src: '/gallery/15.jpeg', colSpan: 5, alt: 'Gallery image 15' },
  { id: '16', src: '/gallery/16.jpeg', colSpan: 5, alt: 'Gallery image 16' },
  { id: '17', src: '/gallery/17.jpeg', colSpan: 7, alt: 'Gallery image 17' },
  { id: '18', src: '/gallery/18.jpeg', colSpan: 12, alt: 'Gallery image 18' },
  { id: '19', src: '/gallery/19.jpeg', colSpan: 4, alt: 'Gallery image 19' },
  { id: '20', src: '/gallery/20.jpeg', colSpan: 8, alt: 'Gallery image 20' },
  { id: '21', src: '/gallery/21.jpeg', colSpan: 6, alt: 'Gallery image 21' },
  { id: '22', src: '/gallery/22.jpeg', colSpan: 6, alt: 'Gallery image 22' },
  { id: '23', src: '/gallery/23.jpeg', colSpan: 5, alt: 'Gallery image 23' },
  { id: '24', src: '/gallery/24.jpeg', colSpan: 7, alt: 'Gallery image 24' },
  { id: '25', src: '/gallery/25.jpeg', colSpan: 12, alt: 'Gallery image 25' },
  { id: '26', src: '/gallery/26.jpeg', colSpan: 4, alt: 'Gallery image 26' },
  { id: '27', src: '/gallery/27.jpeg', colSpan: 8, alt: 'Gallery image 27' },
];
