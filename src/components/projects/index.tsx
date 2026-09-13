import type { Community, Contribution, Project } from '@/content/projects';
import { LinkList, SmartLink } from '@/components/ui/link-list';

/**
 * The project title is the one primary destination and the only thing in
 * the row that is clickable besides the explicit secondary links.
 */
export function ProjectRow({ project }: { project: Project }) {
  // A secondary link that goes where the title already goes is noise.
  const secondaryLinks =
    project.links?.filter((link) => link.href !== project.href) ?? [];

  return (
    <li className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3>
          <SmartLink href={project.href} className="link-primary">
            {project.name}
          </SmartLink>
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
          {project.years}
        </span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <LinkList links={secondaryLinks} />
    </li>
  );
}

export function ContributionRow({
  contribution,
}: {
  contribution: Contribution;
}) {
  return (
    <li className="py-3">
      <h3 className="font-medium text-foreground">{contribution.project}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {contribution.description}
      </p>
      <LinkList links={contribution.links} />
    </li>
  );
}

export function CommunityRow({ community }: { community: Community }) {
  return (
    <li className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium text-foreground">{community.name}</h3>
        <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
          {community.since}–
        </span>
      </div>
      <p className="mt-0.5 text-sm text-muted-foreground">{community.role}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {community.description}
      </p>
      {community.href && (
        <LinkList links={[{ label: 'Visit', href: community.href }]} />
      )}
    </li>
  );
}
