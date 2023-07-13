import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
    const session = await getServerSession(event)
    if (!session) {
        return { status: 'unauthenticated!' }
    }

    console.log(session);

    return { status: 'authenticated!', text: 'im protected by an in-endpoint check', session }
})