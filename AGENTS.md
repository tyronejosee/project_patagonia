# AGENTS.md - Project Patagonia

## Build, Lint, and Test Commands

### Development

```bash
npm run dev          # Start Next.js development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint with Next.js config
npm run typecheck   # Run TypeScript type checking (tsc --noEmit)
```

### Testing

This project does not currently have a test framework configured. To add tests:

```bash
npm install -D vitest @vitejs/plugin-react
# or
npm install -D jest @testing-library/react @testing-library/jest-dom
```

To run a single test file once a test framework is added:

```bash
# Vitest
npx vitest run src/path/to/test.spec.ts

# Jest
npx jest src/path/to/test.spec.ts
```

## Code Style Guidelines

### General

- Use TypeScript with strict mode enabled
- All components must have proper TypeScript types
- Use functional components with hooks (no class components)
- Use the App Router (`src/app/`) over Pages Router

### Imports

- Use absolute imports with `@/` alias (maps to `./src/`)
- Order imports: external libs → internal components/utils → styles
- Use `import { x } from 'module'` for named imports
- Use `import type { x } from 'module'` for type-only imports

```typescript
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";
```

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile`, `DataTable`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Hooks**: camelCase starting with `use` (e.g., `useAuth`, `useDebounce`)
- **Constants**: SCREAMING_SNAKE_CASE for enums/config
- **Variables/functions**: camelCase

### Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Maximum line length: 100 characters (soft limit)
- Trailing commas in multi-line objects/arrays

### Component Structure

Follow this structure for UI components:

```typescript
import * as React from 'react';
import { SomeComponent } from '@radix-ui/react-some-component';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const componentVariants = cva('base-classes', {
  variants: {
    variant: { default: '...', secondary: '...' },
    size: { default: '...', sm: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Component.displayName = 'Component';

export { Component, componentVariants };
```

### Types

- Use explicit return types for functions
- Use `interface` for object shapes, `type` for unions/intersections
- Use Zod for runtime validation of external data (forms, API responses)
- Enable strict null checks

### Error Handling

- Use try/catch for async operations
- Display user-friendly error messages via toast/alert
- Log errors appropriately (console.error in development)
- Never expose sensitive information in error messages

### Tailwind CSS (v4)

- Use utility classes for styling
- Use `cn()` utility from `@/lib/utils` to merge classNames
- Use CVA (class-variance-authority) for component variants
- Follow the design system tokens when available

### State Management

- Use React `useState` for local component state
- Use React `useContext` for global UI state (theme, auth)
- Use React Query or SWR for server state (if needed)

### Accessibility

- Use Radix UI primitives for interactive components
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Use semantic HTML elements

### Database/Supabase

- Use Supabase client from `@/lib/supabase`
- Never expose Supabase keys in client-side code
- Use Row Level Security (RLS) policies on the backend
- Use Zod to validate data from Supabase responses

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   └── ui/                # Reusable UI components (shadcn-style)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── supabase.ts        # Supabase client
│   └── utils.ts           # cn() utility
└── styles/
    └── globals.css        # Global styles
```

## Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```
