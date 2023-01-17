import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
// import { GraphQLDateTime } from 'graphql-iso-date';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      // resolvers: { DateTime: GraphQLDateTime },
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
