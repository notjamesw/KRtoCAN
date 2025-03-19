"use client";

import { ReactNode } from 'react';

export default function Container({ component }: { component: ReactNode }) {
    return (
        <div className = "w-full h-full rounded-md">
            {component}
        </div>
    )
}