import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const meta = {
    title: "Components/UI/Button",
    component: Button,
    args: {
        children: "Button",
    },
    argTypes: {
        size: {
            options: ["default", "sm", "icon-xs", "icon-sm", "icon-lg"]
        },
        variant: {
            options: ["default"],
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {

}

export const SizePreview: Story = {
    render: () => (
        <div className="grid gap-5">
            <span>Basic</span>
            <div className="flex gap-2 items-center">
                <Button>Default</Button>
                <Button size="sm">Small</Button>
            </div>

            <span>Icon only</span>
            <div className="flex gap-2 items-center">
                <Button size="icon-lg">
                    <Briefcase />
                </Button>
                <Button size="icon-sm">
                    <Briefcase />
                </Button>
                <Button size="icon-xs">
                    <Briefcase />
                </Button>
            </div>
        </div>
    )
}

export const BasicSize: Story = {
    argTypes: {
        size: {
            options: ["default", "sm"]
        }
    }
}

export const IconSize: Story = {
    argTypes: {
        size: {
            options: ["icon-xs", "icon-sm", "icon-lg"]
        }
    },
    render: (args) => (
        <Button
            size="icon-lg"
            {...args}
        >
            <Briefcase />
        </Button>
    )
}