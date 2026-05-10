import type { BuildUrlArg } from './url.js';
import { requestJson, requestVoid } from './http.js';
import { createUrlBuilder } from './url.js';

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
  routeId?: string | null;
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
  routeId?: string | null;
  repositoryIds: string[];
  events: string[];
}

export interface SaveGoogleDriveSubscriptionsRequest {
  installationId: string;
  channelId: string;
  routeId?: string | null;
  resourceKeys: string[];
  events: string[];
}

export interface SaveGoogleCalendarSubscriptionsRequest {
  installationId: string;
  channelId: string;
  routeId?: string | null;
  calendarIds: string[];
  events: string[];
}

export interface SaveVercelSubscriptionsRequest {
  installationId: string;
  channelId: string;
  routeId?: string | null;
  projectIds: string[];
  events: string[];
  target: string;
}

export interface SaveRailwaySubscriptionsRequest {
  installationId: string;
  channelId: string;
  routeId?: string | null;
  projectIds: string[];
  events: string[];
}

export interface SaveTrelloSubscriptionsRequest {
  installationId: string;
  channelId: string;
  routeId?: string | null;
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
  completeGitHubInstall: (input: { token: string; body: CompleteGitHubInstallRequest }) => Promise<AppInstallation>;
  listGitHubRepositories: (input: { token: string; installationId: string }) => Promise<GitHubRepositoriesResponse>;
  saveGitHubSubscriptions: (input: { token: string; body: SaveGitHubSubscriptionsRequest }) => Promise<AppInstallation>;
  deleteGitHubSubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteGitHubRoute: (input: { token: string; routeId: string }) => Promise<void>;
  createGoogleDriveInstallUrl: (token: string) => Promise<InstallUrlResponse>;
  completeGoogleDriveInstall: (input: { token: string; body: CompleteGoogleDriveInstallRequest }) => Promise<AppInstallation>;
  listGoogleDriveResources: (input: { token: string; installationId: string }) => Promise<GoogleDriveResourcesResponse>;
  saveGoogleDriveSubscriptions: (input: { token: string; body: SaveGoogleDriveSubscriptionsRequest }) => Promise<AppInstallation>;
  deleteGoogleDriveSubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteGoogleDriveRoute: (input: { token: string; routeId: string }) => Promise<void>;
  createGoogleCalendarInstallUrl: (token: string) => Promise<InstallUrlResponse>;
  completeGoogleCalendarInstall: (input: { token: string; body: CompleteGoogleCalendarInstallRequest }) => Promise<AppInstallation>;
  listGoogleCalendars: (input: { token: string; installationId: string }) => Promise<GoogleCalendarsResponse>;
  saveGoogleCalendarSubscriptions: (input: { token: string; body: SaveGoogleCalendarSubscriptionsRequest }) => Promise<AppInstallation>;
  deleteGoogleCalendarSubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteGoogleCalendarRoute: (input: { token: string; routeId: string }) => Promise<void>;
  createVercelInstallUrl: (token: string) => Promise<InstallUrlResponse>;
  completeVercelInstall: (input: { token: string; body: CompleteVercelInstallRequest }) => Promise<AppInstallation>;
  listVercelProjects: (input: { token: string; installationId: string }) => Promise<VercelProjectsResponse>;
  saveVercelSubscriptions: (input: { token: string; body: SaveVercelSubscriptionsRequest }) => Promise<AppInstallation>;
  deleteVercelSubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteVercelRoute: (input: { token: string; routeId: string }) => Promise<void>;
  createRailwayInstallUrl: (token: string) => Promise<InstallUrlResponse>;
  completeRailwayInstall: (input: { token: string; body: CompleteRailwayInstallRequest }) => Promise<AppInstallation>;
  listRailwayProjects: (input: { token: string; installationId: string }) => Promise<RailwayProjectsResponse>;
  saveRailwaySubscriptions: (input: { token: string; body: SaveRailwaySubscriptionsRequest }) => Promise<AppInstallation>;
  deleteRailwaySubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteRailwayRoute: (input: { token: string; routeId: string }) => Promise<void>;
  createTrelloInstallUrl: (token: string) => Promise<InstallUrlResponse>;
  completeTrelloInstall: (input: { token: string; body: CompleteTrelloInstallRequest }) => Promise<AppInstallation>;
  listTrelloBoards: (input: { token: string; installationId: string }) => Promise<TrelloBoardsResponse>;
  saveTrelloSubscriptions: (input: { token: string; body: SaveTrelloSubscriptionsRequest }) => Promise<AppInstallation>;
  deleteTrelloSubscription: (input: { token: string; subscriptionId: string }) => Promise<void>;
  deleteTrelloRoute: (input: { token: string; routeId: string }) => Promise<void>;
}

export function createFlyntlyAppsApi(config: FlyntlyAppsApiConfig): FlyntlyAppsApi {
  const buildAppsUrl = createUrlBuilder(config.chatApiUrl);

  return {
    buildAppsUrl,
    listCatalog: (token) =>
      requestJson(buildAppsUrl('/apps/catalog'), {
        token,
        fallbackError: 'Failed to load app catalog',
      }),
    listInstallations: (token) =>
      requestJson(buildAppsUrl('/apps/installations'), {
        token,
        fallbackError: 'Failed to load app installations',
      }),
    createGitHubInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/github/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start GitHub installation',
      }),
    completeGitHubInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/github/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish GitHub installation',
      }),
    listGitHubRepositories: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/github/installations/${installationId}/repositories`), {
        token,
        fallbackError: 'Failed to load GitHub repositories',
      }),
    saveGitHubSubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/github/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save GitHub subscriptions',
      }),
    deleteGitHubSubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/github/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove GitHub subscription',
      }),
    deleteGitHubRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/github/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove GitHub route',
      }),
    createGoogleDriveInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/google-drive/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start Google Drive installation',
      }),
    completeGoogleDriveInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/google-drive/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish Google Drive installation',
      }),
    listGoogleDriveResources: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/google-drive/installations/${installationId}/resources`), {
        token,
        fallbackError: 'Failed to load Google Drive resources',
      }),
    saveGoogleDriveSubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/google-drive/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save Google Drive subscriptions',
      }),
    deleteGoogleDriveSubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/google-drive/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Google Drive subscription',
      }),
    deleteGoogleDriveRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/google-drive/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Google Drive route',
      }),
    createGoogleCalendarInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/google-calendar/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start Google Calendar installation',
      }),
    completeGoogleCalendarInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/google-calendar/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish Google Calendar installation',
      }),
    listGoogleCalendars: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/google-calendar/installations/${installationId}/calendars`), {
        token,
        fallbackError: 'Failed to load Google calendars',
      }),
    saveGoogleCalendarSubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/google-calendar/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save Google Calendar subscriptions',
      }),
    deleteGoogleCalendarSubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/google-calendar/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Google Calendar subscription',
      }),
    deleteGoogleCalendarRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/google-calendar/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Google Calendar route',
      }),
    createVercelInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/vercel/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start Vercel installation',
      }),
    completeVercelInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/vercel/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish Vercel installation',
      }),
    listVercelProjects: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/vercel/installations/${installationId}/projects`), {
        token,
        fallbackError: 'Failed to load Vercel projects',
      }),
    saveVercelSubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/vercel/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save Vercel subscriptions',
      }),
    deleteVercelSubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/vercel/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Vercel subscription',
      }),
    deleteVercelRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/vercel/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Vercel route',
      }),
    createRailwayInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/railway/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start Railway installation',
      }),
    completeRailwayInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/railway/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish Railway installation',
      }),
    listRailwayProjects: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/railway/installations/${installationId}/projects`), {
        token,
        fallbackError: 'Failed to load Railway projects',
      }),
    saveRailwaySubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/railway/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save Railway subscriptions',
      }),
    deleteRailwaySubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/railway/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Railway subscription',
      }),
    deleteRailwayRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/railway/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Railway route',
      }),
    createTrelloInstallUrl: (token) =>
      requestJson(buildAppsUrl('/apps/trello/install-url'), {
        method: 'POST',
        token,
        fallbackError: 'Failed to start Trello installation',
      }),
    completeTrelloInstall: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/trello/complete'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to finish Trello installation',
      }),
    listTrelloBoards: ({ token, installationId }) =>
      requestJson(buildAppsUrl(`/apps/trello/installations/${installationId}/boards`), {
        token,
        fallbackError: 'Failed to load Trello boards',
      }),
    saveTrelloSubscriptions: ({ token, body }) =>
      requestJson(buildAppsUrl('/apps/trello/subscriptions'), {
        method: 'POST',
        token,
        body,
        fallbackError: 'Failed to save Trello subscriptions',
      }),
    deleteTrelloSubscription: ({ token, subscriptionId }) =>
      requestVoid(buildAppsUrl(`/apps/trello/subscriptions/${subscriptionId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Trello subscription',
      }),
    deleteTrelloRoute: ({ token, routeId }) =>
      requestVoid(buildAppsUrl(`/apps/trello/routes/${routeId}`), {
        method: 'DELETE',
        token,
        fallbackError: 'Failed to remove Trello route',
      }),
  };
}
