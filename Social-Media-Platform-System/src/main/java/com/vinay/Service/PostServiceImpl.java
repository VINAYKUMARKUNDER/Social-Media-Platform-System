package com.vinay.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinay.dto.PostDto;
import com.vinay.dto.UserDto;
import com.vinay.exception.ResourceNotFoundException;
import com.vinay.model.Post;
import com.vinay.model.User;
import com.vinay.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	private PostRepository postRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public PostDto createPost(PostDto postDto) {
		UserDto userDto = userService.getUserById(postDto.getUserId());
		Post post = modelMapper.map(postDto, Post.class);

		Post savedPost = postRepository.save(post);
		return modelMapper.map(post, PostDto.class);
	}

	@Override
	public PostDto getPostById(Long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found"));
		return modelMapper.map(post, PostDto.class);
	}

	@Override
	public PostDto updatePost(Long id, PostDto postDto){
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found"));
		post.setContent(postDto.getContent());
		Post updatedPost = postRepository.save(post);
		return modelMapper.map(updatedPost, PostDto.class);
	}

	@Override
	public void deletePost(Long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found"));
		postRepository.delete(post);
	}

	@Override
	public PostDto likePost(Long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found"));
		post.setLikes(post.getLikes() + 1);
		Post likedPost = postRepository.save(post);
		return modelMapper.map(likedPost, PostDto.class);
	}

	@Override
	public PostDto unlikePost(Long id)  {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found"));
		int likes = post.getLikes();
		post.setLikes(likes > 0 ? likes - 1 : 0);
		Post unlikedPost = postRepository.save(post);
		return  modelMapper.map(unlikedPost, PostDto.class);
	}

	

	@Override
	public List<PostDto> getTopLikedPosts() {
		List<Post> posts = postRepository.findAll();
		return posts.stream().map(post-> modelMapper.map(posts, PostDto.class)).collect(Collectors.toList());
	}

	@Override
	public Long getTotalPosts() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
