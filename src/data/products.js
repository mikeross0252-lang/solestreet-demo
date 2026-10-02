const sizes = [40, 41, 42, 43, 44, 45]

export const products = [
  { id: 1, name: 'Lagos Low', category: 'Lifestyle', price: 45000, sizes, colors: ['White', 'Cream'], image: '/images/lagos-low.jpg', tag: 'New', description: 'Clean everyday low-tops that go with anything.' },
  { id: 2, name: 'Plum Drift', category: 'Lifestyle', price: 52000, sizes, colors: ['Plum', 'Black'], image: '/images/plum-drift.jpg', tag: '', description: 'Soft suede finish in our signature plum.' },
  { id: 3, name: 'Abuja Classic', category: 'Lifestyle', price: 38000, sizes, colors: ['White', 'Green'], image: '/images/abuja-classic.jpg', tag: 'Sale', description: 'A timeless terrace-style sneaker.' },
  { id: 4, name: 'Milk Court', category: 'Lifestyle', price: 48000, sizes, colors: ['Cream', 'Grey'], image: '/images/milk-court.jpg', tag: '', description: 'Retro court look with a cushioned sole.' },
  { id: 5, name: 'Apex High', category: 'High-tops', price: 78000, sizes, colors: ['Red', 'Black'], image: '/images/apex-high.jpg', tag: 'New', description: 'Bold high-tops made for the street.' },
  { id: 6, name: 'Street King', category: 'High-tops', price: 85000, sizes, colors: ['Black', 'White'], image: '/images/street-king.jpg', tag: '', description: 'Padded ankle and a thick sole for all-day wear.' },
  { id: 7, name: 'Ember High', category: 'High-tops', price: 90000, sizes, colors: ['Orange', 'Black'], image: '/images/ember-high.jpg', tag: 'Sale', description: 'Canvas high-tops in a loud, fiery color.' },
  { id: 8, name: 'Street Runner', category: 'Running', price: 65000, sizes, colors: ['Grey', 'Blue'], image: '/images/street-runner.jpg', tag: '', description: 'Responsive cushioning for daily runs.' },
  { id: 9, name: 'Pulse Sprint', category: 'Running', price: 58000, sizes, colors: ['Red', 'White'], image: '/images/pulse-sprint.jpg', tag: 'New', description: 'Light and springy for fast miles.' },
  { id: 10, name: 'Aero Glide', category: 'Running', price: 72000, sizes, colors: ['Navy', 'Yellow'], image: '/images/aero-glide.jpg', tag: '', description: 'Stable support for long distances.' },
  { id: 11, name: 'Cloud Slide', category: 'Slides', price: 25000, sizes, colors: ['Black', 'White'], image: '/images/cloud-slide.jpg', tag: '', description: 'Soft, easy slides for after the game.' },
  { id: 12, name: 'Sol Slide', category: 'Slides', price: 28000, sizes, colors: ['Black', 'Orange'], image: '/images/sol-slide.jpg', tag: 'Sale', description: 'Quick-dry slides for hot days.' },
]

export const categories = ['All', 'Lifestyle', 'High-tops', 'Running', 'Slides']

export const formatPrice = (n) => '₦' + n.toLocaleString()