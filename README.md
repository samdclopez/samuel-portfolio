# Samuel Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Installation

1. Install pnpm globally (if not already installed):
```bash
npm install -g pnpm
```

2. Clone the repository:
```bash
git clone [your-repository-url]
cd samuel-portfolio
```

3. Install dependencies:
```bash
pnpm install
```

## Available Scripts

The following scripts are available in the project:

- `pnpm dev` - Start the development server with hot reloading
- `pnpm build` - Create a production build
- `pnpm start` - Start the production server
- `pnpm lint` - Run the linter

## Development

To start the development server:

```bash
pnpm dev
```

This will start the development server at `http://localhost:3000`. The development server includes:
- Hot reloading
- Detailed error messages
- Development-specific optimizations

## Production Deployment

To create a production build and run it:

```bash
pnpm build
pnpm start
```

## Project Structure

```
samuel-portfolio/
├── app/              # Next.js app directory
├── components/       # React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── styles/          # Global styles and Tailwind CSS
└── types/           # TypeScript type definitions
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [pnpm](https://pnpm.io/) - Package manager

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact [your-contact-info]. 