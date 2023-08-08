import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
    return (
        <div className='space-y-8'>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatar/01.png' alt='Avatar' />
                    <AvatarFallback>PA</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Putri Ambarsari</p>
                    <p className='text-sm text-muted-foreground'>ptr.ambasari13@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>IDR 512.000</div>
            </div>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatar/01.png' alt='Avatar' />
                    <AvatarFallback>HA</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Hilal Agus</p>
                    <p className='text-sm text-muted-foreground'>hilal.ha@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>IDR 1.900.000</div>
            </div>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatar/01.png' alt='Avatar' />
                    <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Ahmad Samudra</p>
                    <p className='text-sm text-muted-foreground'>asbx.official@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>IDR 870.000</div>
            </div>
        </div>
    )
}