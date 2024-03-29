import AutoDocsTemplate from "./auto-docs.template.mdx";

const forceFullRerender = (storyFn) => {
  const story = storyFn();

  return {
    ...story,
    moduleMetadata: {
      ...(story?.moduleMetadata || {}),
      providers: [
        story?.moduleMetadata?.providers || [],
        { provide: "_tmp_", useValue: story.props },
      ],
    },
  };
};

export const decorators = [forceFullRerender];

const preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/,
      },
      expanded: true,
    },
    options: {
      storySort: (storyA, StoryB) =>
        storyA.title === StoryB.title
          ? 0
          : storyA.id.localeCompare(StoryB.id, undefined, { numeric: true }),
    },
    docs: {
      page: AutoDocsTemplate,
      source: {
        language: "typescript",
        dark: true,
        type: "code",
      },
      argTypes: {
        sort: "requiredFirst",
      },
    },
    viewport: { disable: true },
    backgrounds: {
      disable: true,
      grid: { disable: true },
    },
  },
};

export default preview;
