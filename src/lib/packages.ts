export interface Package {
    id: string;
    name: string;
    description: string;
    installCommand: string;
    docsUrl: string;
    version: string;
    downloads: string;
    content: string;
}

export const packages: Package[] = [
    {
        id: 'axox-ui',
        name: '@axox/ui',
        description: 'A comprehensive React UI component library based on our design system.',
        installCommand: 'npm install @axox/ui',
        docsUrl: '/packages/axox-ui',
        version: '1.2.0',
        downloads: '2.5k',
        content: `
# @axox/ui

A comprehensive React UI component library based on our design system.

## Installation

\`\`\`bash
npm install @axox/ui
\`\`\`

## Usage

\`\`\`tsx
import { Button } from '@axox/ui';

function App() {
  return <Button>Click me</Button>;
}
\`\`\`

## Components

- Button
- Card
- Input
- Modal
        `
    },
    {
        id: 'axox-utils',
        name: '@axox/utils',
        description: 'Common utility functions and helpers for JavaScript/TypeScript applications.',
        installCommand: 'npm install @axox/utils',
        docsUrl: '/packages/axox-utils',
        version: '0.9.5',
        downloads: '1.2k',
        content: `
# @axox/utils

Common utility functions and helpers.

## Installation

\`\`\`bash
npm install @axox/utils
\`\`\`

## Usage

\`\`\`ts
import { formatDate } from '@axox/utils';

const date = formatDate(new Date());
\`\`\`
        `
    },
    {
        id: 'axox-hooks',
        name: '@axox/hooks',
        description: 'Collection of useful React hooks for state management and DOM interactions.',
        installCommand: 'npm install @axox/hooks',
        docsUrl: '/packages/axox-hooks',
        version: '1.0.1',
        downloads: '850',
        content: `
# @axox/hooks

Collection of useful React hooks.

## Installation

\`\`\`bash
npm install @axox/hooks
\`\`\`

## Usage

\`\`\`tsx
import { useLocalStorage } from '@axox/hooks';

const [value, setValue] = useLocalStorage('key', 'default');
\`\`\`
        `
    }
];
