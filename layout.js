import './globals.css';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Food App',
  description: 'Order your favorite food online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
