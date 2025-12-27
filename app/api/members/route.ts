import { NextResponse } from 'next/server';
import type { MemberProfile } from '@/types';

// 从后端获取成员数据
// 请在这里连接真实的数据库或外部 API
export async function GET() {
  try {
    // TODO: 替换为实际的后端数据源
    // 例如：从数据库获取、从外部 API 获取等
    
    // 示例：连接真实的后端API
    // const response = await fetch('YOUR_BACKEND_API_URL/members');
    // const members = await response.json();
    
    // 目前返回空数组，等待连接真实后端
    // 所有字段都是可选的，如果后端不传，对应的内容就不会显示
    const members: MemberProfile[] = [];

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

