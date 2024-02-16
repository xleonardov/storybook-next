import React from 'react';

import {
  EducationItem,
  EducationItemProps,
} from '../../components/resume-items/EducationItem/EducationItem';
import {
  PresentationItem,
  PresentationItemProps,
} from '../../components/resume-items/PresentationItem/PresentationItem';
import {
  ResumeItem,
  ResumeItemProps,
} from '../../components/resume-items/ResumeItem/ResumeItem';
import {
  WorkExperienceItem,
  WorkExperienceItemProps,
} from '../../components/resume-items/WorkExperienceItem/WorkExperienceItem';

import './resume.css';

export interface ResumeSectionProps {
  sectionName: string;
  sectionType: string;
  items:
    | EducationItemProps[]
    | PresentationItemProps[]
    | ResumeItemProps[]
    | WorkExperienceItemProps[];
}

/**
 * Resume Section helper component
 */
export const ResumeSection = ({
  sectionName,
  sectionType,
  items,
  ...props
}) => {
  // Set up classes.
  const baseClass = 'mm-resume-section';

  // Render the output.
  return (
    <div
      className={[baseClass, props.className]
        .join(' ')
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      <h2 className={`${baseClass}__section-title`}>{sectionName}</h2>
      <div className={`${baseClass}__section-items`}>
        {items.map((item: any, index: number) => {
          return (
            <div key={index} className={`${baseClass}__section-item`}>
              {sectionType === 'education' && <EducationItem {...item} />}
              {sectionType === 'presentations' && (
                <PresentationItem {...item} />
              )}
              {sectionType === 'work-experience' && (
                <WorkExperienceItem {...item} />
              )}
              {sectionType === 'resume' && <ResumeItem {...item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
