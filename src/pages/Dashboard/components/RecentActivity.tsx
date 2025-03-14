import { Timeline, Text, Container, Title, Button, Group } from "@mantine/core";
import {
  ArrowRight,
  GitBranch,
  GitCommit,
  GitPullRequest,
  MessageSquareDot,
} from "lucide-react";

export default function RecentActivity() {
  return (
    <>
      <Group>
        <Title order={3}>Last activity</Title>
        <Button size="xs" variant="outline" rightSection={<ArrowRight />}>
          View more
        </Button>
      </Group>
      <Container>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item bullet={<GitBranch size={12} />} title="New branch">
            <Text c="dimmed" size="sm">
              You&apos;ve created new branch{" "}
              <Text variant="link" component="span" inherit>
                fix-notifications
              </Text>{" "}
              from master
            </Text>
            <Text size="xs" mt={4}>
              2 hours ago
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<GitCommit size={12} />} title="Commits">
            <Text c="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Pull request"
            bullet={<GitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="sm">
              You&apos;ve submitted a pull request
              <Text variant="link" component="span" inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Code review"
            bullet={<MessageSquareDot size={12} />}
          >
            <Text c="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  );
}
