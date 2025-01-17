# FerrisChat API Documentation

- [Index](./index.md)
- [Snowflakes](./snowflakes.md)
- [Authentication](./auth/README.md)
    - [User Login](./auth/user_login.md)
    - [Bot Login](./auth/bot_login.md)
    - [Tokens](./auth/tokens.md)
- [Bots](./bots/README.md)
    - [Create](./bots/create.md)
    - [Edit](./bots/edit.md)
    - [Delete](./bots/delete.md)
- [Users](./users/README.md)
  - [Create](./users/create.md)
  - [Edit](./users/edit.md)
  - [Get](./users/get.md)
  - [Delete](./users/delete.md)
- [Guilds](./guilds/README.md)
    - [Create](./guilds/create.md)
    - [Edit](./guilds/edit.md)
    - [Get](./guilds/get.md)
    - [Delete](./guilds/delete.md)
- [Channels](./channels/README.md)
  - [Create](./channels/create.md)
  - [Edit](./channels/edit.md)
  - [Get](./channels/get.md)
  - [Delete](./channels/delete.md)
- [Messages](./messages/README.md)
  - [Send](./messages/send.md)
  - [Edit](./messages/edit.md)
  - [Get](./messages/get.md)
  - [Get History](./messages/history.md)
  - [Delete](./messages/delete.md)
- [Websocket](./ws/README.md)
    - [Inbound Events](./ws/events_inbound/README.md)
      - [Identify](./ws/events_inbound/identify.md)
    - [Outbound Events](./ws/events_outbound/README.md)
      - [IdentifyAccepted](./ws/events_outbound/identify_accepted.md)
      - [MessageCreate](./ws/events_outbound/message_create.md)
      - [MessageUpdate](./ws/events_outbound/message_update.md)
      - [MessageDelete](./ws/events_outbound/message_delete.md)
      - [ChannelCreate](./ws/events_outbound/channel_create.md)
      - [ChannelUpdate](./ws/events_outbound/channel_update.md)
      - [ChannelDelete](./ws/events_outbound/channel_delete.md)
      - [GuildCreate](./ws/events_outbound/guild_create.md)
      - [GuildUpdate](./ws/events_outbound/guild_update.md)
      - [GuildDelete](./ws/events_outbound/guild_delete.md)
      - [MemberCreate](./ws/events_outbound/member_create.md)
      - [MemberUpdate](./ws/events_outbound/member_update.md)
      - [MemberDelete](./ws/events_outbound/member_delete.md)
      - [InviteCreate](./ws/events_outbound/invite_create.md)
      - [InviteDelete](./ws/events_outbound/invite_delete.md)
      - [RoleCreate](./ws/events_outbound/role_create.md)
      - [RoleUpdate](./ws/events_outbound/role_update.md)
      - [RoleDelete](./ws/events_outbound/role_delete.md)
      - [MemberRoleAdd](./ws/events_outbound/member_role_add.md)
      - [MemberRoleDelete](./ws/events_outbound/member_role_delete.md)
    - [Bidirectional Events](./ws/events_bidir/README.md)
      - [Ping](./ws/events_bidir/ping.md)
      - [Pong](./ws/events_bidir/pong.md)
    - [Connection Flow](./ws/flow.md)
    - [Close Codes](./ws/close_codes.md)