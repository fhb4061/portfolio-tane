import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "@/components/ui/heading";

const meta = {
    title: "Components/UI/Heading",
    component: Heading,
    args: {
        label: "Heading"
    },
    argTypes: {
        size: {
            options: [1, 2]
        }
    }
} satisfies Meta<typeof Heading>

export default meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {

}

export const Sizes: Story = {
    render: (args) => (
        <div className="grid gap-2">
            <Heading
                {...args}
            />
            <Heading
                size={2}
                {...args}
            />
        </div>
    )
}