"use client";

import React, { ReactNode, useEffect, useRef} from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDE_NAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(0px at 100% 0)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
};

const HeaderMobile = () => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className={`fixed inset-0 z-50 w-full md:hidden ${
                isOpen ? '' : 'pointer-events-none'
            }`}
        >
        <motion.div
            className="absolute inset-0 right-0 w-full bg-white"
            variants={sidebar}
        />
        <motion.ul
            className = "absolute grid w-full gap-3 px-10 py-16"
            variants = {variants}
        >
            {SIDE_NAV_ITEMS.map((item: SideNavItem, idx:number) => {
                const isLastItem = idx === SIDE_NAV_ITEMS.length - 1;

                return (
                    <div key={idx}>
                        <MenuItem>
                        <Link
                            href={item.path}
                            onClick={() => toggleOpen()}
                            className={`flex w-full text-2xl ${item.path === pathname ? 'font-bold' : ""}`}
                            >
                            {item.title}
                        </Link>
                        </MenuItem>

                        {!isLastItem && (
                            <MenuItem className="my-3 h-px w-full bg-gray-300" />
                        )}
                    </div>
                );
            })}
        </motion.ul>
        <MenuToggle toggle ={toggleOpen}/>
        </motion.nav>
    )
}

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-[14px] z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
);

const Path = (props: React.ComponentProps<typeof motion.path>) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
);

const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 0.02,
        },
    },
}

const variants = {
    open: {
        transition: { staggerChildren: 0.02, delayChildren: 0.15 },
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 },
    }
};

const MenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
            {children}
        </motion.li>
    );
}


const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 });
    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);
    return dimensions.current;
}

export default HeaderMobile;