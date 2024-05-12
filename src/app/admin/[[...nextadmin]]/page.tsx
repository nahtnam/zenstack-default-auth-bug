import { NextAdmin } from "@premieroctet/next-admin";
import { getPropsFromParams } from "@premieroctet/next-admin/dist/appRouter";
import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";
import schema from "../../../../prisma/json-schema/json-schema.json";

const prisma = new PrismaClient()
const db = enhance(prisma)

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}) {
  const props = await getPropsFromParams({
    params: params.nextadmin,
    searchParams,
    prisma: db,
    options: {
      basePath: '/',
    },
    schema,
  });

  return <NextAdmin {...props}  />;
}
