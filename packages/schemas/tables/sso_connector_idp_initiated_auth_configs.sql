/** init_order = 2 */
create table sso_connector_idp_initiated_auth_configs (
  tenant_id varchar(21) not null 
    references tenants (id) on update cascade on delete cascade,
  /** The globally unique identifier of the SSO connector. */
  connector_id varchar(128) not null
    references sso_connectors (id) on update cascade on delete cascade,
  /** The default Logto application id. */
  default_application_id varchar(21) not null
    references applications (id) on update cascade on delete cascade,
  /** OIDC sign-in redirect URI. */
  redirect_uri text,
  /** Additional OIDC auth parameters. */
  auth_parameters jsonb /* @use IdpInitiatedAuthParams */ not null default '{}'::jsonb,
  created_at timestamptz not null default(now()),
  primary key (tenant_id, connector_id),
  /** Insure the application type is Traditional. */
  constraint application_type
    check (check_application_type(default_application_id, 'Traditional'))
);