import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateResume() {
  return (
    <Link
      href="/resume/create"
      className="flex h-10 items-center rounded-lg bg-primary-500 px-4 text-sm font-medium text-white transition-colors hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <PlusIcon className="h-5 md:mr-1" />
      <span className="hidden md:block">Создать резюме</span>{' '}
    </Link>
  );
}


export function UpdateInvoice({ id }) {
  return (
    <Link
      href="/dashboard/invoices"
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}