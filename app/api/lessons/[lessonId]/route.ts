import db from "@/db/drizzle"
import { lessons } from "@/db/schema"
import { getIsAdmin } from "@/lib/admin"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

type RouterType = {
  params: Promise<{
    lessonId: number;
  }>;
};

export const GET = async (
    req: Request,
    { params }: RouterType
) => {
    const isAdmin = await getIsAdmin();
    const { lessonId } = await params;

    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 } );
    }

    const data = await db.query.lessons.findFirst({
        where: eq(lessons.id, lessonId)
    });

    return NextResponse.json(data);
}

export const PUT = async (
    req: Request,
    { params }: RouterType
) => {
    const isAdmin = await getIsAdmin();
    const { lessonId } = await params;

    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 } );
    }

    const body = await req.json();

    const data = await db.update(lessons).set({
        ...body
    })
    .where(eq(lessons.id, lessonId))
    .returning();

    return NextResponse.json(data[0]);
}

export const DELETE = async (
    req: Request,
    { params }: RouterType
) => {
    const isAdmin = await getIsAdmin();
    const { lessonId } = await params;

    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 } );
    }

    const data = await db.delete(lessons)
    .where(eq(lessons.id, lessonId))
    .returning();

    return NextResponse.json(data[0]);
}