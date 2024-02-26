import React, { useRef, useState } from 'react';

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  FloatingFocusManager,
  FloatingArrow,
  arrow,
} from '@floating-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faCircleQuestion,
  faCog,
  faTags,
  IconLookup,
  IconName,
  IconPrefix,
} from '@fortawesome/free-solid-svg-icons';

import './popover.css';

const ARROW_HEIGHT = 10;
const ARROW_WIDTH = 18;
const ARROW_RADIUS = 0;
const GAP = 8;

interface PopoverProps {
  /**
   * The content to display in the popover.
   */
  content: React.ReactNode;
  /**
   * The placement of the popover.
   */
  placement: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The trigger icon for the popover.
   */
  triggerIcon: 'info' | 'question' | 'cog' | 'tags';
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Popover UI component
 */
export const Popover = ({
  content,
  placement = 'top',
  triggerIcon = 'info',
  className,
  ...props
}: PopoverProps) => {
  // Set up classes.
  const baseClass = 'mm-popover';

  // Assign icon based on triggerIcon prop.
  let processedIcon: string | [IconPrefix, IconName] | IconLookup;

  switch (triggerIcon) {
    case 'info':
      processedIcon = faCircleInfo;
      break;
    case 'question':
      processedIcon = faCircleQuestion;
      break;
    case 'cog':
      processedIcon = faCog;
      break;
    case 'tags':
      processedIcon = faTags;
      break;
    default:
      processedIcon = faCircleInfo;
  }

  // Set up state.
  const [isOpen, setIsOpen] = useState(false);

  // FUI config.
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const arrowX = middlewareData.arrow?.x ?? 0;
  const arrowY = middlewareData.arrow?.y ?? 0;
  const transformX = arrowX + ARROW_WIDTH / 2;
  const transformY = arrowY + ARROW_HEIGHT;

  const { isMounted } = useTransitionStyles(context, {
    initial: {
      transform: 'scale(0)',
    },
    common: ({ side }) => ({
      transformOrigin: {
        top: `${transformX}px calc(100% + ${ARROW_HEIGHT}px)`,
        bottom: `${transformX}px ${-ARROW_HEIGHT}px`,
        left: `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px`,
        right: `${-ARROW_HEIGHT}px ${transformY}px`,
      }[side],
    }),
  });

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <button
        className={`${baseClass}__trigger`}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <FontAwesomeIcon
          icon={processedIcon}
          className={`${baseClass}__icon`}
        />
      </button>
      {isMounted && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={`${baseClass}__container`}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              height={ARROW_HEIGHT}
              width={ARROW_WIDTH}
              tipRadius={ARROW_RADIUS}
              fill='var(--mm-color-background-default)'
              stroke='var(--mm-color-border-default)'
              strokeWidth={1}
              className={`${baseClass}__arrow`}
            />
            {content && (
              <div className={`${baseClass}__content`}>{content}</div>
            )}
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
};
