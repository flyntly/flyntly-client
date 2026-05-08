import type { BuildUrlArg } from './url.js';
export interface FlyntlyAppsApiConfig {
    chatApiUrl: string;
}
export interface AppCatalogItem {
    id: string;
    slug: string;
    name: string;
    description: string;
    provider: string;
    configured: boolean;
    capabilities: {
        events?: string[];
        interactive?: boolean;
    };
    scopes: string[];
}
export interface AppSubscription {
    id: string;
    channelId: string;
    createdBy: string;
    canManage: boolean;
    externalResourceId: string;
    externalResourceName: string;
    events: string[];
    webhookUrl?: string | null;
}
export interface AppInstallation {
    id: string;
    appId: string;
    provider: string;
    status: string;
    installedBy: string;
    canManage: boolean;
    externalInstallationId?: string | null;
    externalAccountLogin?: string | null;
    externalAccountType?: string | null;
    botActorId: string;
    botName: string;
    botAvatarUrl?: string | null;
    subscriptions: AppSubscription[];
}
export interface GitHubRepository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    private: boolean;
}
export interface GoogleDriveResource {
    id: string;
    resourceKey: string;
    name: string;
    kind: string;
    targetResource: string;
    webUrl?: string | null;
}
export interface GoogleCalendar {
    id: string;
    summary: string;
    primary: boolean;
    accessRole?: string | null;
    backgroundColor?: string | null;
}
export interface VercelProject {
    id: string;
    name: string;
    teamId?: string | null;
    teamName?: string | null;
    framework?: string | null;
    projectUrl?: string | null;
}
export interface RailwayProject {
    id: string;
    name: string;
    workspaceId: string;
    workspaceName: string;
}
export interface TrelloList {
    id: string;
    name: string;
}
export interface TrelloBoard {
    id: string;
    name: string;
    webUrl?: string | null;
    lists: TrelloList[];
}
export interface InstallUrlResponse {
    installUrl: string;
    state: string;
}
export interface CompleteGitHubInstallRequest {
    state: string;
    installationId: string;
}
export interface CompleteGoogleDriveInstallRequest {
    state: string;
    code: string;
}
export interface CompleteGoogleCalendarInstallRequest {
    state: string;
    code: string;
}
export interface CompleteVercelInstallRequest {
    state: string;
    code: string;
}
export interface CompleteRailwayInstallRequest {
    state: string;
    code: string;
}
export interface CompleteTrelloInstallRequest {
    state: string;
    token: string;
}
export interface SaveGitHubSubscriptionsRequest {
    installationId: string;
    channelId: string;
    repositoryIds: string[];
    events: string[];
}
export interface SaveGoogleDriveSubscriptionsRequest {
    installationId: string;
    channelId: string;
    resourceKeys: string[];
    events: string[];
}
export interface SaveGoogleCalendarSubscriptionsRequest {
    installationId: string;
    channelId: string;
    calendarIds: string[];
    events: string[];
}
export interface SaveVercelSubscriptionsRequest {
    installationId: string;
    channelId: string;
    projectIds: string[];
    events: string[];
    target: string;
}
export interface SaveRailwaySubscriptionsRequest {
    installationId: string;
    channelId: string;
    projectIds: string[];
    events: string[];
}
export interface SaveTrelloSubscriptionsRequest {
    installationId: string;
    channelId: string;
    boardId: string;
    listIds: string[];
    events: string[];
}
export interface AppsCatalogResponse {
    apps: AppCatalogItem[];
}
export interface AppInstallationsResponse {
    installations: AppInstallation[];
}
export interface GitHubRepositoriesResponse {
    repositories: GitHubRepository[];
}
export interface GoogleDriveResourcesResponse {
    resources: GoogleDriveResource[];
}
export interface GoogleCalendarsResponse {
    calendars: GoogleCalendar[];
}
export interface VercelProjectsResponse {
    projects: VercelProject[];
}
export interface RailwayProjectsResponse {
    projects: RailwayProject[];
}
export interface TrelloBoardsResponse {
    boards: TrelloBoard[];
}
export interface FlyntlyAppsApi {
    buildAppsUrl: (...args: BuildUrlArg[]) => string;
    listCatalog: (token: string) => Promise<AppsCatalogResponse>;
    listInstallations: (token: string) => Promise<AppInstallationsResponse>;
    createGitHubInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeGitHubInstall: (input: {
        token: string;
        body: CompleteGitHubInstallRequest;
    }) => Promise<AppInstallation>;
    listGitHubRepositories: (input: {
        token: string;
        installationId: string;
    }) => Promise<GitHubRepositoriesResponse>;
    saveGitHubSubscriptions: (input: {
        token: string;
        body: SaveGitHubSubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteGitHubSubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
    createGoogleDriveInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeGoogleDriveInstall: (input: {
        token: string;
        body: CompleteGoogleDriveInstallRequest;
    }) => Promise<AppInstallation>;
    listGoogleDriveResources: (input: {
        token: string;
        installationId: string;
    }) => Promise<GoogleDriveResourcesResponse>;
    saveGoogleDriveSubscriptions: (input: {
        token: string;
        body: SaveGoogleDriveSubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteGoogleDriveSubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
    createGoogleCalendarInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeGoogleCalendarInstall: (input: {
        token: string;
        body: CompleteGoogleCalendarInstallRequest;
    }) => Promise<AppInstallation>;
    listGoogleCalendars: (input: {
        token: string;
        installationId: string;
    }) => Promise<GoogleCalendarsResponse>;
    saveGoogleCalendarSubscriptions: (input: {
        token: string;
        body: SaveGoogleCalendarSubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteGoogleCalendarSubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
    createVercelInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeVercelInstall: (input: {
        token: string;
        body: CompleteVercelInstallRequest;
    }) => Promise<AppInstallation>;
    listVercelProjects: (input: {
        token: string;
        installationId: string;
    }) => Promise<VercelProjectsResponse>;
    saveVercelSubscriptions: (input: {
        token: string;
        body: SaveVercelSubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteVercelSubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
    createRailwayInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeRailwayInstall: (input: {
        token: string;
        body: CompleteRailwayInstallRequest;
    }) => Promise<AppInstallation>;
    listRailwayProjects: (input: {
        token: string;
        installationId: string;
    }) => Promise<RailwayProjectsResponse>;
    saveRailwaySubscriptions: (input: {
        token: string;
        body: SaveRailwaySubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteRailwaySubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
    createTrelloInstallUrl: (token: string) => Promise<InstallUrlResponse>;
    completeTrelloInstall: (input: {
        token: string;
        body: CompleteTrelloInstallRequest;
    }) => Promise<AppInstallation>;
    listTrelloBoards: (input: {
        token: string;
        installationId: string;
    }) => Promise<TrelloBoardsResponse>;
    saveTrelloSubscriptions: (input: {
        token: string;
        body: SaveTrelloSubscriptionsRequest;
    }) => Promise<AppInstallation>;
    deleteTrelloSubscription: (input: {
        token: string;
        subscriptionId: string;
    }) => Promise<void>;
}
export declare function createFlyntlyAppsApi(config: FlyntlyAppsApiConfig): FlyntlyAppsApi;
//# sourceMappingURL=apps-api.d.ts.map