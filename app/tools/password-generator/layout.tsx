import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('password-generator')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
