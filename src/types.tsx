export type ActivityKitActivity = {
    id: string,
    contentState: Record<string, unknown>,
    attributes: Record<string, unknown>
}

export type ActivityDismissalPolicy = "default" | "immediate" | "afterDate"

export type EndActivityOptions = {
    dismissalPolicy?: ActivityDismissalPolicy,
    dismissalDate?: Date,
    finalContentState?: Record<string, unknown>
}